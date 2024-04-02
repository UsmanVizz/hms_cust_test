import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from "@angular/forms";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";

@Component({
  selector: "app-verify-otp",
  templateUrl: "./verify-otp.component.html",
  styleUrls: ["./verify-otp.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class VerifyOtpComponent implements OnInit {
  otpGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<VerifyOtpComponent>,
    private fb: FormBuilder
  ) {
    this.otpGroup = this.fb.group({
      otp1: new FormControl("", [Validators.required]),
      otp2: new FormControl("", [Validators.required]),
      otp3: new FormControl("", [Validators.required]),
      otp4: new FormControl("", [Validators.required]),
      otp5: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

  getConcatenatedOTP(): string {
    let concatenatedOTP = "";
    const otpControls = this.otpGroup.controls;
    Object.keys(otpControls).forEach((key) => {
      concatenatedOTP += otpControls[key].value;
    });
    return concatenatedOTP;
  }

  submitForm() {
    if (this.otpGroup.valid) {
      const concatenatedOTP = this.getConcatenatedOTP();
      console.log("Concatenated OTP:", concatenatedOTP);
    }
  }
}
