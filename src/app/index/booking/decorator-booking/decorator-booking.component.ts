import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CalendarCarouselComponent } from "../calendar-carousel/calendar-carousel.component";

@Component({
  selector: "app-decorator-booking",
  standalone: true,
  imports: [CommonModule, RouterModule, CalendarCarouselComponent],
  templateUrl: "./decorator-booking.component.html",
  styleUrls: ["./decorator-booking.component.scss"],
})
export class DecoratorBookingComponent {}
