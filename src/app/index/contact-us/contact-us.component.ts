import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
