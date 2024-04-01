import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class FooterComponent implements OnInit {
  userEmail: FormControl;

  constructor(private toastr: ToastrService) {
    this.userEmail = new FormControl("", [
      Validators.required,
      Validators.email,
    ]);
  }

  ngOnInit(): void {}

  subscribeEmail() {
    if (this.userEmail.invalid) {
      this.toastr.error("Please enter a valid email", "Error");
      return;
    } else if (!this.userEmail.value) {
      this.toastr.error("Email is required", "Error");
    } else {
      this.toastr.success(
        `${this.userEmail.value} has successfully subscribed.`,
        "Subscribed"
      );
    }
    this.userEmail.reset();
  }
}
