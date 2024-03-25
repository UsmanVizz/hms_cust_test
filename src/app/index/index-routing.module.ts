import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () =>
      import("../index/home/home.component").then((mod) => mod.HomeComponent),
  },
  {
    path: "search-hall",
    loadComponent: () =>
      import("../index/search-hall/search-hall.component").then(
        (mod) => mod.SearchHallComponent
      ),
  },
  {
    path: "single-hall",
    loadComponent: () =>
      import("./booking/single-hall/single-hall.component").then(
        (mod) => mod.SingleHallComponent
      ),
  },
  {
    path: "date-booking",
    loadComponent: () =>
      import("./booking/date-booking/date-booking.component").then(
        (m) => m.DateBookingComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
