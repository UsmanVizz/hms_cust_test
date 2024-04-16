import { Component, OnInit, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-makeup-artist",

  templateUrl: "./makeup-artist.component.html",
  styleUrls: ["./makeup-artist.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MakeupArtistComponent implements OnInit {
  displayedCards: any[] = [];
  currentIndex = 0;

  value!: number;

  rating: number = 5;

  constructor(private router: Router) {
    this.updateDisplayedCards();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  cards = [
    { imageUrl: "../../../../assets/images/catering.png" },
    { imageUrl: "../../../../assets/images/catering.png" },
    { imageUrl: "../../../../assets/images/catering.png" },
    { imageUrl: "../../../../assets/images/catering.png" },
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
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateDisplayedCards();
  }
}
