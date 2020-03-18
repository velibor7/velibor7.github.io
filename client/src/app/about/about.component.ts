import { Component, OnInit } from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.sass"],
  animations: [
    trigger("popOverState", [
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
    ])
  ]
})
export class AboutComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit(): void {}

  //this determines
  // da li ovaj geter sam od sebe moze tamo da se pozove wtf?!
  get stateName() {
    return this.show ? "show" : "hide";
  }

  toggle() {
    this.show = !this.show;
  }
}
