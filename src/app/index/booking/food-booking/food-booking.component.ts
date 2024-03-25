import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarCarouselComponent } from "../calendar-carousel/calendar-carousel.component";
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";

@Component({
  selector: "app-food-booking",
  standalone: true,
  imports: [
    CommonModule,
    CalendarCarouselComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./food-booking.component.html",
  styleUrls: ["./food-booking.component.scss"],
})
export class FoodBookingComponent implements OnInit {
  rating: number = 4;
  constructor() {}

  formGroup!: FormGroup;

  ngOnInit() {}

  setRating(value: number) {
    this.rating = value;
  }
}
