import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  isMenuShown = true;
  constructor() {}

  ngOnInit(): void {}

  showMenu() {
    this.isMenuShown = !this.isMenuShown;
  }
}
