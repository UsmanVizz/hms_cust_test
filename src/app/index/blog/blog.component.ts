import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CheckOutComponent } from "../check-out/check-out.component";

declare let AOS:any;

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, CheckOutComponent],
})
export class BlogComponent implements OnInit {
  imageData: any;

  constructor() {
    this.imageData = [
      {
        imageUrl: "../../../assets/blog-img/post-05.jpg",
        date: "Febrary 8, 2024",
        title: "We Love Passion",
        description:
          "Every detail of the wedding is infused with love, custom invitations, first dance...",
      },
      {
        imageUrl: "../../../assets/blog-img/post-06-1.jpg",
        date: "Febrary 9, 2024",
        title: "We Love Passion",
        description:
          "Every detail of the wedding is infused with love, custom invitations, first dance...",
      },
      {
        imageUrl: "../../../assets/blog-img/post-06.jpg",
        date: "Febrary 10, 2024",
        title: "We Love Passion",
        description:
          "Every detail of the wedding is infused with love, custom invitations, first dance...",
      },
      {
        imageUrl: "../../../assets/blog-img/post-04.jpg",
        date: "Febrary 11, 2024",
        title: "We Love Passion",
        description:
          "Every detail of the wedding is infused with love, custom invitations, first dance...",
      },
      {
        imageUrl: "../../../assets/blog-img/2.jpg",
        date: "Febrary 12, 2024",
        title: "We Love Passion",
        description:
          "Every detail of the wedding is infused with love, custom invitations, first dance...",
      },
      {
        imageUrl: "../../../assets/blog-img/banner-1.jpg",
        date: "Febrary 13, 2024",
        title: "We Love Passion",
        description:
          "Every detail of the wedding is infused with love, custom invitations, first dance...",
      },
    ];
  }

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      delay: 200,
      once: true,
    });
  }
}
