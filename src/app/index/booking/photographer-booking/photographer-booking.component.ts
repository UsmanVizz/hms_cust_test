import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CalendarCarouselComponent } from "../calendar-carousel/calendar-carousel.component";

@Component({
  selector: "app-photographer-booking",
  standalone: true,
  imports: [CommonModule, RouterModule, CalendarCarouselComponent],
  templateUrl: "./photographer-booking.component.html",
  styleUrls: ["./photographer-booking.component.scss"],
})
export class PhotographerBookingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
