import { Component, OnInit, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

interface Review {
  imageUrl: string;
  name: string;
  designation: string;
  comment: string;
  rating: number;
  createdAt: string;
}

@Component({
  selector: "app-single-hall",
  templateUrl: "./single-hall.component.html",
  styleUrls: ["./single-hall.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class SingleHallComponent implements OnInit {
  rating: number = 5;

  counter: number = 0;

  displayedCards: any[] = [];
  currentIndex = 0;

  value!: number;

  menuForm!: FormGroup;
  showMenuForm: boolean = false;

  reviews: Review[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.updateDisplayedCards();

    this.reviews = [
      {
        imageUrl: "../../../../assets/images/male.png",
        name: "Alex Stanton",
        designation: "CEO at Bukalapak",
        comment:
          "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        rating: 4,
        createdAt: "21-June-2015",
      },
      {
        imageUrl: "../../../../assets/images/female.png",
        name: "Skylar Dias",
        designation: "CEO at Amazon",
        comment:
          "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        rating: 5,
        createdAt: "22-July-2017",
      },
    ];
  }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      menuItems: this.formBuilder.array([]),
    });

    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  cards = [
    { imageUrl: "../../../../assets/images/image 17.jpg" },
    { imageUrl: "../../../../assets/images/image 18.jpg" },
    { imageUrl: "../../../../assets/images/image 19.jpg" },
  ];

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.updateDisplayedCards();
  }

  private updateDisplayedCards() {
    if (window.innerWidth < 769) {
      this.displayedCards = [this.cards[this.currentIndex % this.cards.length]];
    } else {
      this.displayedCards = [this.cards[this.currentIndex % this.cards.length]];
    }
  }

  setRating(value: number) {
    this.rating = value;
  }

  bookNow() {
    this.router.navigate(["single-hall"]);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateDisplayedCards();
    console.log("Sliding");
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateDisplayedCards();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateDisplayedCards();
  }

  createMenu() {
    this.showMenuForm = true;
    this.menuItems.push(
      this.formBuilder.group({
        itemName: [""],
        itemPrice: [""],
        counter: [0],
      })
    );
  }

  get menuItems(): FormArray {
    return this.menuForm.get("menuItems") as FormArray;
  }

  increment(index: number) {
    const control = this.menuItems.at(index).get("counter");
    if (control) {
      let counter = control.value;
      control.patchValue(counter + 1);
    }
  }

  decrement(index: number) {
    const control = this.menuItems.at(index).get("counter");
    if (control) {
      let counter = control.value;
      if (counter > 0) {
        control.patchValue(counter - 1);
      }
    }
  }

  getMenuCounterColor(index: number): string {
    const control = this.menuItems.at(index).get("counter");
    if (control) {
      const counter = control.value;
      return counter === 0 ? "#efefef" : "";
    }
    return "";
  }

  getCounterValue(index: number): number {
    const control = this.menuItems.at(index).get("counter");
    if (control) {
      return control.value;
    }
    return 0;
  }

  onSubmit() {
    console.log(this.menuForm.value);
    // You can handle form submission logic here
  }

  dateBooking() {
    this.router.navigate(["/date-booking"]);
  }
}
