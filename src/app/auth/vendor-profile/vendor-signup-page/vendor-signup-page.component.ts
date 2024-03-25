import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute, Router } from "@angular/router";
import { FlagServiceService } from "src/app/services/flag-service.service";

@Component({
  selector: "app-vendor-signup-page",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./vendor-signup-page.component.html",
  styleUrls: ["./vendor-signup-page.component.scss"],
})
export class VendorSignupPageComponent implements OnInit {
  dataName: string = "";

  getCountryCode: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flagService: FlagServiceService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.dataName = params["type"];
    });

    if (!this.dataName) {
      this.router.navigate(["/auth/vendor-signup"]);
    }

    this.getCountryCode = this.flagService.flagArray;
  }

  loginPath() {
    this.router.navigate(["/auth/login"]);
  }
}
