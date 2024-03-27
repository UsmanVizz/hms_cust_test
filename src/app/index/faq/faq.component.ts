import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CheckOutComponent } from "../check-out/check-out.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

declare let AOS: any;

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CheckOutComponent,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class FaqComponent implements OnInit {
  expansionDetail: any;

  panelOpenState: boolean[] = [];

  constructor() {
    this.expansionDetail = [
      {
        title: "Alright, but what exactly do you do?",
        description:
          "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
      },
      {
        title:
          "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
        description:
          "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
      },
      {
        title: "Are your rates competitive?",
        description:
          "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
      },
      {
        title: "Why do you have a monthly project cap?",
        description:
          "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
      },
    ];
  }

  ngOnInit(): void {
    this.panelOpenState = new Array(this.expansionDetail.length).fill(false);

    AOS.init({
      duration: 700,
      delay: 200,
      once: true,
    });
  }

  togglePanel(index: number): void {
    for (let i = 0; i < this.expansionDetail.length; i++) {
      if (i !== index) {
        this.panelOpenState[i] = false;
      }
    }
    this.panelOpenState[index] = !this.panelOpenState[index];
  }

  isPanelOpen(index: number): boolean {
    return this.panelOpenState[index];
  }
}
