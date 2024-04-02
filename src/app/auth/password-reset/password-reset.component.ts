import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { PasswordRecoveryService } from "src/app/services/password-recovery.service";
import { ToastrService } from "ngx-toastr";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { VerifyOtpComponent } from "../verify-otp/verify-otp.component";

@Component({
  selector: "app-password-reset",
  templateUrl: "./password-reset.component.html",
  styleUrls: ["./password-reset.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class PasswordResetComponent implements OnInit {
  userPassword: FormGroup;
  constructor(
    private fb: FormBuilder,
    private passwordRecovery: PasswordRecoveryService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PasswordResetComponent>,
    private router: Router
  ) {
    this.userPassword = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  passwordReset() {
    this.passwordRecovery.forgotPassword(this.userPassword.value).subscribe(
      (response) => {
        console.log(response);
        if (response.status == 200) {
          this.toastr.success(
            `OTP has been sent to ${this.userPassword.value.email}`
          );
          this.dialogRef.close();
          this.dialog.open(VerifyOtpComponent, {
            disableClose: true,
            backdropClass: "modal-backdrop",
            panelClass: "modal-dialog",
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
