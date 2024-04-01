import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CheckOutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
