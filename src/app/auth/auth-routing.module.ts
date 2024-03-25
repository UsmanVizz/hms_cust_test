import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "customer-profile",
    loadComponent: () =>
      import("./select-profile/select-profile.component").then(
        (mod) => mod.SelectProfileComponent
      ),
  },
  {
    path: "customer-signup",
    loadComponent: () =>
      import(
        "./select-profile/customer-signup-page/customer-signup-page.component"
      ).then((mod) => mod.CustomerSignupPageComponent),
  },
  {
    path: "login",
    loadComponent: () =>
      import(
        "./select-profile/customer-login-page/customer-login-page.component"
      ).then((mod) => mod.CustomerLoginPageComponent),
  },
  {
    path: "vendor-profile",
    loadComponent: () =>
      import("./vendor-profile/vendor-profile.component").then(
        (mod) => mod.VendorProfileComponent
      ),
  },
  {
    path: "vendor-signup",
    loadComponent: () =>
      import(
        "./vendor-profile/vendor-signup-page/vendor-signup-page.component"
      ).then((mod) => mod.VendorSignupPageComponent),
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
