import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
  animations: [
    trigger("showMenu", [
      state(
        "show",
        style({
          opacity: 1
        })
      ),
      state(
        "hide",
        style({
          opacity: 0
        })
      ),
      transition("show => hide", animate("400ms ease-out")),
      transition("hide => show", animate("400ms ease-in"))
    ]),

    trigger("topBlur", [
      state(
        "show",
        style({
          // opacity: 1,
          filter: "blur(5px)"
        })
      ),
      state(
        "hide",
        style({
          // opacity: 0,
          filter: "blur(0px)"
        })
      ),
      transition("show => hide", animate("400ms ease-out")),
      transition("hide => show", animate("400ms ease-in"))
    ]),
    trigger("arrow", [
      state(
        "show",
        style({
          transform: "rotateZ(-180deg)"
        })
      ),
      state(
        "hide",
        style({
          transform: "rotateZ(0deg)"
        })
      ),
      transition("show => hide", animate("400ms ease")),
      transition("hide => show", animate("400ms ease"))
    ])
  ]
})
export class HomeComponent implements OnInit {
  isMenuShown = false;
  constructor() {}

  ngOnInit(): void {}

  get menuState() {
    return this.isMenuShown ? "show" : "hide";
  }

  menuToggle() {
    this.isMenuShown = !this.isMenuShown;
    // console.log(this.isMenuShown);
  }
  logAnimation($event) {
    console.log(`${this.isMenuShown} animation ${$event.phaseName}`);
  }
  /*
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

  slidingClasses() {
    let myClasses = {
      slideIn: this.isMenuShown == true,
      slideOut: this.isMenuShown == false
    };
    return myClasses;
  }
  */
}
