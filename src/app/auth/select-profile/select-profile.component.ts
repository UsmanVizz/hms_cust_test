import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-select-profile",
  templateUrl: "./select-profile.component.html",
  styleUrls: ["./select-profile.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SelectProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectCustomer() {
    this.router.navigate(["/auth/customer-signup"], {
      queryParams: { type: "customer" },
    });
  }

  selectBusiness() {
    this.router.navigate(["/auth/customer-signup"], {
      queryParams: { type: "business" },
    });
  }
}
