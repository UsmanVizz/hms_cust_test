import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CheckOutComponent } from "../index/check-out/check-out.component";

declare let AOS: any;

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, CheckOutComponent],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      delay: 200,
      once: true,
    });
  }
}
