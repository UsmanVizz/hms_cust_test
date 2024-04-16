import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CalendarCarouselComponent } from "../calendar-carousel/calendar-carousel.component";
import { MatTabsModule } from "@angular/material/tabs";
import { CateringComponent } from "../catering/catering.component";
import { MakeupArtistComponent } from "../makeup-artist/makeup-artist.component";

@Component({
  selector: "app-photographer-booking",
  templateUrl: "./photographer-booking.component.html",
  styleUrls: ["./photographer-booking.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CalendarCarouselComponent,
    MatTabsModule,
    CateringComponent,
    MakeupArtistComponent,
  ],
})
export class PhotographerBookingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
