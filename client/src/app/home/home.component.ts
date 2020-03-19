import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  HostBinding,
  Input,
  DoCheck,
  OnChanges,
  SimpleChanges
} from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from "@angular/animations";
@Component({
  selector: "app-home",
  providers: [],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
  animations: [
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
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy, DoCheck {
  @Input() message: string;
  @Input() state: any;

  isMenuShown: string;

  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    // console.log("state: " + typeof this.state);
    // console.log("message: " + typeof this.message);
    this.isMenuShown = this.state;
  }

  ngOnDestroy(): void {}

  get menuState() {
    // console.log(this.state);
    let nesto: string;
    this.ngDoCheck();
    console.log(this.isMenuShown);
    if (this.isMenuShown == "hide") {
      return "hide";
    } else if (this.isMenuShown == "show") {
      return "show";
    }
  }
}
