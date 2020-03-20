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

  isMenuShown: any;
  pomocna: any;
  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    // console.log("state: " + typeof this.state);
    // console.log("message: " + typeof this.message);
    // this.isMenuShown = this.state;
    console.log(this.state);
    // console.log(this.state);
    // console.log(this.message);
    // console.log(this.isMenuShown);
  }

  ngOnDestroy(): void {}

  menuState() {
    // this.ngDoCheck();
    // console.log(this.isMenuShown);
    if (this.isMenuShown == false) {
      //console.log("isMenuShown is false");
      this.pomocna = "hide";
      return "hide";
    } else if (this.isMenuShown == true) {
      //console.log("isMenuShown is true");
      this.pomocna = "show";
      return this.pomocna;
    } else {
      //console.log("here too");
      return "show";
    }
  }

  debilnaFja() {
    this.ngDoCheck();
    console.log(this.isMenuShown);
    if (this.isMenuShown == false) {
      console.log("uso");
      this.pomocna = "hide";
      return "hide";
    } else if (this.isMenuShown == true) {
      console.log("sad odje");
      this.pomocna = "show";
      return "show";
    }
    return this.pomocna;
  }
}
