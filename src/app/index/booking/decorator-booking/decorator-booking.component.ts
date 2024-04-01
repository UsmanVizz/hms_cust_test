import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CalendarCarouselComponent } from "../calendar-carousel/calendar-carousel.component";

@Component({
  selector: "app-decorator-booking",
  templateUrl: "./decorator-booking.component.html",
  styleUrls: ["./decorator-booking.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, CalendarCarouselComponent],
})
export class DecoratorBookingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
