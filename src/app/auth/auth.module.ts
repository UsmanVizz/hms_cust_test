import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../index/layout/header/header.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    HeaderComponent,
    HttpClientModule,
  ],
})
export class AuthModule {}
