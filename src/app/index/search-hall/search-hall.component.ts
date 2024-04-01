import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { CalendarCarouselComponent } from "../booking/calendar-carousel/calendar-carousel.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";

@Component({
  selector: "app-search-hall",
  templateUrl: "./search-hall.component.html",
  styleUrls: ["./search-hall.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CalendarCarouselComponent,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSliderModule,
  ],
})
export class SearchHallComponent implements OnInit {
  title!: string;
  selected!: string;
  openCalendar: boolean = false;
  isCalendarOpen: boolean = false;
  openTime: boolean = false;
  isTimeOpen: boolean = false;
  openPriceRange: boolean = false;
  isRangeOpen: boolean = false;
  formGroup!: FormGroup;

  morningChecked: boolean = false;
  afternoonChecked: boolean = false;
  eveningChecked: boolean = false;
  nightChecked: boolean = false;

  openCapacity: boolean = false;
  isCapacityOpen: boolean = false;
  num1: boolean = false;
  num2: boolean = false;
  num3: boolean = false;

  isBudgetOpen: boolean = false;
  openBudget: boolean = false;
  budgetPacks: boolean = false;
  exclusiveGrabs: boolean = false;
  premiumGrabs: boolean = false;
  luxurious: boolean = false;

  min: any = 0;
  max: any = 5000000;
  valueEnd: any = 0;
  valueStart: any = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      city: new FormControl<string | null>(null),
    });

    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.title = params["type"];
    });
  }

  showCalendar() {
    this.isCalendarOpen = !this.isCalendarOpen;
    if (this.openCalendar) {
      this.openCalendar = false;
    } else {
      this.openCalendar = true;
    }
  }

  showTime() {
    this.isTimeOpen = !this.isTimeOpen;
    if (this.openTime) {
      this.openTime = false;
    } else {
      this.openTime = true;
    }
  }

  showRange() {
    this.isRangeOpen = !this.isRangeOpen;
    if (this.openPriceRange) {
      this.openPriceRange = false;
    } else {
      this.openPriceRange = true;
    }
  }

  showCapacity() {
    this.isCapacityOpen = !this.isCapacityOpen;
    if (this.openCapacity) {
      this.openCapacity = false;
    } else {
      this.openCapacity = true;
    }
  }

  showBudget() {
    this.isBudgetOpen = !this.isBudgetOpen;
    if (this.openBudget) {
      this.openBudget = false;
    } else {
      this.openBudget = true;
    }
  }
}
