import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { FlagServiceService } from "src/app/services/flag-service.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-customer-signup-page",
  templateUrl: "./customer-signup-page.component.html",
  styleUrls: ["./customer-signup-page.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
  ],
})
export class CustomerSignupPageComponent implements OnInit {
  dataName: string = "";

  countries: any;

  getCountryCode: any;

  userSignup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private flagService: FlagServiceService,
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.userSignup = this.formBuilder.group({
      first_name: new FormControl("", [Validators.required]),
      last_name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      // confirmPwd: new FormControl("", [Validators.required]),
      user_type: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      cnic: new FormControl("", Validators.required),
      contact_number: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.dataName = params["type"];
      this.userSignup.patchValue({ user_type: this.dataName });
    });

    if (!this.dataName) {
      this.router.navigate(["/auth/customer-profile"]);
      this.toastr.info("kindly select the user type");
    }

    this.getCountryCode = this.flagService.flagArray;

    // this.getCountries();
  }

  userRegistration() {
    this.authService.userSignup(this.userSignup.value).subscribe({
      next: (response) => {
        console.log("Server response:", response);
        this.toastr.success(response.message)
      },
      error: (error) => {
        console.error("Server error:", error);

        if (error.status === 401) {
          console.log("Invalid email or password");
        } else if (error.status === 505) {
          console.warn("CORS Error");
        }
      },
    });
  }

  getCountries(): void {
    this.flagService.getCountries().subscribe(
      (response) => {
        console.log("Contries", response);
        this.countries = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
