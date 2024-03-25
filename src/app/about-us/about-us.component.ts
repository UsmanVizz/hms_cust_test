import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CheckOutComponent } from "../index/check-out/check-out.component";

@Component({
  selector: "app-about-us",
  standalone: true,
  imports: [CommonModule, RouterModule, CheckOutComponent],
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
