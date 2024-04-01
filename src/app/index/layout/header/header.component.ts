import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { AuthServiceService } from "src/app/services/auth-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  userName: string | null = null;
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.userName = this.authService.getLoggedInUserName();
    console.log("User Name:", this.userName);

    this.isLoggedIn = this.authService.isLoggedIn();
  }

  selectCustomerProfile() {
    this.router.navigate(["/auth/customer-profile"]);
  }

  selectVendorProfile() {
    this.router.navigate(["/auth/vendor-profile"]);
  }

  loginOrLogout() {
    if (this.isLoggedIn) {
      this.authService.logout();
      this.isLoggedIn = false;
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
