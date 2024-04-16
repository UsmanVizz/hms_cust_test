import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class ContactUsComponent implements OnInit {
  contactUs: FormGroup;
  constructor(private toastr: ToastrService, private fb: FormBuilder) {
    this.contactUs = this.fb.group({
      name: new FormControl("", [Validators.required]),
      contactNo: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactUs.value);

    this.toastr.success("Thanks for contacting us!");
    this.contactUs.reset();
  }
}
