import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ToastrService } from "ngx-toastr";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { DragDropModule } from "@angular/cdk/drag-drop";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-date-booking",
  templateUrl: "./date-booking.component.html",
  styleUrls: ["./date-booking.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
})
export class DateBookingComponent implements OnInit {
  bookingForm!: FormGroup;

  step: number = 1;
  panelOpenState: boolean = false;
  counter: number = 0;

  items = ["Carrots", "Tomatoes", "Onions", "Apples", "Avocados"];

  basket = ["Oranges", "Bananas", "Cucumbers"];

  trackByFn(index: number, item: any): any {
    return index;
  }

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.bookingForm = this.fb.group({
      bookingName: new FormControl("", [Validators.required]),
      eventDate: new FormControl("", [Validators.required]),
      customerName: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      userEmail: new FormControl("", [Validators.required, Validators.email]),
      userAddress: new FormControl("", [Validators.required]),
      zipCode: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      contactNo: new FormControl("", [Validators.required]),
      cnic: new FormControl("", [Validators.required]),
      nightTime: new FormControl("", [Validators.required]),
      morningTime: new FormControl("", [Validators.required]),
      eveningTime: new FormControl("", [Validators.required]),
      djChecked: new FormControl("", [Validators.required]),
      photographerChecked: new FormControl("", [Validators.required]),
      decorChecked: new FormControl("", [Validators.required]),
      foodChecked: new FormControl("", [Validators.required]),
      menuItems: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  validateEmail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  get menuItems() {
    return this.bookingForm.get("menuItems") as FormArray;
  }

  addMenuItem() {
    this.menuItems.push(
      this.fb.group({
        name: "",
        description: "",
        price: "",
        counter: 0,
      })
    );
  }

  removeMenuItem(index: number) {
    this.menuItems.removeAt(index);
  }

  increment(index: number) {
    const control = this.menuItems.at(index).get("counter");
    if (control) {
      let counter = control.value;
      control.setValue(counter + 1);
    }
  }

  decrement(index: number) {
    const control = this.menuItems.at(index).get("counter");
    if (control) {
      let counter = control.value;
      if (counter > 0) {
        control.setValue(counter - 1);
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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  nextStep(): void {
    if (this.step < 6) {
      if (this.step === 1) {
        const bookingNameControl = this.bookingForm.get("bookingName");
        const eventDateControl = this.bookingForm.get("eventDate");

        if (!bookingNameControl?.value || !eventDateControl?.value) {
          if (!bookingNameControl?.value) {
            bookingNameControl?.setErrors({ required: true });
            this.toastr.info("Booking Name are required");
          }
          if (!eventDateControl?.value) {
            eventDateControl?.setErrors({ required: true });
            this.toastr.info("Event Date are required");
          }

          return;
        }
      }
      if (this.step === 2) {
        const customerNameControl = this.bookingForm.get("customerName");
        const userEmailControl = this.bookingForm.get("userEmail");
        const userAddressControl = this.bookingForm.get("userAddress");
        const zipCodeControl = this.bookingForm.get("zipCode");
        const cityControl = this.bookingForm.get("city");
        const contactNoControl = this.bookingForm.get("contactNo");
        const cnicControl = this.bookingForm.get("cnic");

        if (
          !customerNameControl?.value ||
          !userEmailControl?.value ||
          !userAddressControl?.value ||
          !zipCodeControl?.value ||
          !cityControl?.value ||
          !contactNoControl?.value ||
          !cnicControl?.value
        ) {
          if (!customerNameControl?.value) {
            customerNameControl?.setErrors({ required: true });
            this.toastr.info("Customer Name are required");
          }

          if (!userEmailControl?.value) {
            userEmailControl?.setErrors({ required: true });
            this.toastr.info("Email is required");
          } else if (!this.validateEmail(userEmailControl?.value)) {
            userEmailControl?.setErrors({ email: true });
            this.toastr.info("Please enter a valid email");
          }
          if (!userAddressControl?.value) {
            userAddressControl?.setErrors({ required: true });
            this.toastr.info("Address are required");
          }
          if (!zipCodeControl?.value) {
            zipCodeControl?.setErrors({ required: true });
            this.toastr.info("Zip Code are required");
          }
          if (!cityControl?.value) {
            cityControl?.setErrors({ required: true });
            this.toastr.info("City are required");
          }
          if (!contactNoControl?.value) {
            contactNoControl?.setErrors({ required: true });
            this.toastr.info("Contact No are required");
          }
          if (!cnicControl?.value) {
            cnicControl?.setErrors({ required: true });
            this.toastr.info("CNIC are required");
          }

          return;
        }
      }

      this.step++;
    }
  }

  editHall() {
    this.step = 1;
  }

  editDetails() {
    this.step = 2;
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  addSelectItem(item: string) {
    // Find the index of the item in the items array
    const index = this.items.indexOf(item);

    // If the item is found in the items array
    if (index !== -1) {
      // Remove the item from the items array
      this.items.splice(index, 1);

      // Add the item to the basket array
      this.basket.push(item);

      // Optionally, you can update the form control value or perform any other necessary actions here
    }
  }

  returnSelectedItem(item: string) {
    const index = this.basket.indexOf(item);

    // If the item is found in the basket array
    if (index !== -1) {
      // Remove the item from the basket array
      this.basket.splice(index, 1);

      // Add the item to the items array
      this.items.push(item);

      // Optionally, you can update the form control value or perform any other necessary actions here
    }
  }

  save() {
    const selectedItems = this.basket;

    const formData = {
      ...this.bookingForm.value,
      selectedItems: selectedItems,
    };

    console.log(formData);

    this.toastr.success("Your booking has been saved.");
    this.bookingForm.reset();

    this.step = 1;
  }
}
