import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./index/layout/header/header.component";
import { FooterComponent } from "./index/layout/footer/footer.component";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import {
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "rgba(255,255,255,0)",
  bgsOpacity: 0.1,
  bgsPosition: "bottom-right",
  bgsSize: 20,
  bgsType: "ball-spin-clockwise",
  blur: 0,
  delay: 0,
  fastFadeOut: true,
  fgsColor: "rgba(255,255,255,0)",
  fgsPosition: "center-center",
  fgsSize: 20,
  fgsType: "ball-spin-clockwise",
  gap: 10,
  logoPosition: "center-center",
  logoSize: 120,
  logoUrl: "",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40,40,40,0)",
  pbColor: "#0096ff",
  pbDirection: "ltr",
  pbThickness: 4,
  hasProgressBar: true,
  textColor: "#FFFFFF",
  textPosition: "center-center",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatDatepickerModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: true,
    }),
    NgxUiLoaderRouterModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
