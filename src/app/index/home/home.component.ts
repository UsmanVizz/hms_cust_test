import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../layout/header/header.component";

import { HallBookingComponent } from "../booking/hall-booking/hall-booking.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { CheckOutComponent } from "../check-out/check-out.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    HallBookingComponent,
    FooterComponent,
    CheckOutComponent,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class HomeComponent implements OnInit {
  image1 = " ../../../assets/icons/ng-zone/Group 4548 (copy).svg";
  locationName!: string;
  locationError: string | undefined;
  locationArray: any
  locationAvailable: boolean = false;
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.locationArray = JSON.parse(localStorage.getItem('geolocation') || "");
    if (this.locationArray) {
      this.locationAvailable = true
      this.locationName = this.locationArray.location;
      console.log("location", this.locationName)
    }
  }

  detectLocation() {
    if (this.locationAvailable) {
      this.toastr.info("Location Already Detected", "Info");
      return;
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.reverseGeocode(
            position.coords.latitude,
            position.coords.longitude
          );
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

  }

  reverseGeocode(latitude: number, longitude: number) {


    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    this.http.get(url).subscribe((data: any) => {
      if (data.display_name) {
        this.locationName = data.display_name;
        let dt = { latitude: latitude, longitude: longitude, location: this.locationName };
        localStorage.setItem('geolocation', JSON.stringify(dt));
        this.toastr.success("Found the Location", "Successfully");
      } else {
        this.locationName = "Location not found";
        this.toastr.error("Location not found", "Error");
      }
    });
  }
}
