import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-password-reset",
  templateUrl: "./password-reset.component.html",
  styleUrls: ["./password-reset.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class PasswordResetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
