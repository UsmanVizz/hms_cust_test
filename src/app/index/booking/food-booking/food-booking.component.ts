import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarCarouselComponent } from "../calendar-carousel/calendar-carousel.component";
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";

declare let AOS: any;

@Component({
  selector: "app-food-booking",
  templateUrl: "./food-booking.component.html",
  styleUrls: ["./food-booking.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    CalendarCarouselComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FoodBookingComponent implements OnInit {
  rating: number = 4;
  constructor() {}

  formGroup!: FormGroup;

  ngOnInit() {
    AOS.init({
      duration: 700,
      delay: 200,
      once: true,
    });
  }

  setRating(value: number) {
    this.rating = value;
  }
}
