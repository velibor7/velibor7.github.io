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
    // console.log(this.isMenuShown);
  }

  rotatingClasses() {
    let myClasses = {
      active: this.isMenuShown == true,
      notactive: this.isMenuShown == false
    };
    return myClasses;
  }

  bluringClasses() {
    let myClasses = {
      blurIn: this.isMenuShown == true,
      blurOut: this.isMenuShown == false
    };
    return myClasses;
  }
}
