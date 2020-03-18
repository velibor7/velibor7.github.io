import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { GalleryComponent } from "./gallery/gallery.component";

import { AppService } from "./app.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    GalleryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
