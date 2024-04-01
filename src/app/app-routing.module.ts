import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./index/index.module").then((mod) => mod.IndexModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((mod) => mod.AuthModule),
  },
  {
    path: "about-us",
    loadComponent: () =>
      import("./about-us/about-us.component").then(
        (mod) => mod.AboutUsComponent
      ),
  },
  {
    path: "**",
    loadComponent: () =>
      import("./error-found/error-found.component").then(
        (mod) => mod.ErrorFoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
