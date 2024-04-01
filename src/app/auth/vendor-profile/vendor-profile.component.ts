import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-vendor-profile",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./vendor-profile.component.html",
  styleUrls: ["./vendor-profile.component.scss"],
})
export class VendorProfileComponent implements OnInit {
  selectedType: string | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectType(type: string) {
    this.selectedType = type;
  }

  navigateToNext() {
    if (this.selectedType) {
      this.router.navigate(["/auth/vendor-signup"], {
        queryParams: { type: this.selectedType },
      });
    } else {
    }
  }

  resetSelection() {
    this.selectedType = null;
  }

  loginPath() {
    this.router.navigate(["/auth/login"]);
  }
}
