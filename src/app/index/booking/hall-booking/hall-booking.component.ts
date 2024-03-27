import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PhotographerBookingComponent } from "../photographer-booking/photographer-booking.component";
import { DecoratorBookingComponent } from "../decorator-booking/decorator-booking.component";
import { FoodBookingComponent } from "../food-booking/food-booking.component";
import { CalendarCarouselComponent } from "../calendar-carousel/calendar-carousel.component";

@Component({
  selector: "app-hall-booking",
  templateUrl: "./hall-booking.component.html",
  styleUrls: ["./hall-booking.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PhotographerBookingComponent,
    DecoratorBookingComponent,
    FoodBookingComponent,
    CalendarCarouselComponent,
  ],
})
export class HallBookingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
