import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { ToastrService } from "ngx-toastr";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { PasswordResetComponent } from "../../password-reset/password-reset.component";

@Component({
  selector: "app-customer-login-page",
  templateUrl: "./customer-login-page.component.html",
  styleUrls: ["./customer-login-page.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class CustomerLoginPageComponent implements OnInit {
  userLogin: FormGroup;

  userName: string | null = null;

  user = {
    userEmail: "",
    userPwd: "",
  };

  alreadyLoggedIn: boolean = false;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.userLogin = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  loggedIn() {
    this.authService.userLoggedIn(this.userLogin.value).subscribe({
      next: (response) => {
        console.log("Server response:", response);
        this.authService.login(
          response.userId,
          response.data.first_name + " " + response.data.last_name
        );
        this.userLogin.reset();
        window.location.href = "/home";

        this.toastr.success(
          `${response.data.first_name} ${response.data.last_name} is successfully logged in`
        );
      },
      error: (error) => {
        // console.error("Server error:", error);
        this.toastr.error("Invalid Email or Password");
      },
    });
  }

  showPassword() {
    this.dialog.open(PasswordResetComponent);
  }
}
