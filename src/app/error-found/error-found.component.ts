import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
  selector: "app-error-found",
  templateUrl: "./error-found.component.html",
  styleUrls: ["./error-found.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ErrorFoundComponent implements OnInit {
  title!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.title = params["url;"];
    });
  }
}
