import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
