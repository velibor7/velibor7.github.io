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
  animations: []
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
