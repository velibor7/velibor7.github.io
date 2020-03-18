import { Component, HostBinding, Input, HostListener } from "@angular/core";
import { AppService } from "./app.service";
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
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],

  animations: [
    trigger("showMenu", [
      state(
        "show",
        style({
          transform: "translateY(0)"
          // opacity: 1
        })
      ),
      state(
        "hide",
        style({
          transform: "translateY(500%)"
          // opacity: 0
        })
      ),

      //* working
      transition("show => hide", animate("400ms ease")),
      transition("hide => show", animate("400ms ease"))
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
export class AppComponent {
  title = "client";

  @HostBinding("class.is-menu-shown")
  isMenuShown = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.change.subscribe(isMenuShown => {
      this.isMenuShown = isMenuShown;
    });
  }

  public get menuState() {
    // console.log("iz app metode: " + this.isMenuShown);
    // console.log(this.isMenuShown);
    return this.isMenuShown ? "show" : "hide";
  }

  menuToggle() {
    this.isMenuShown = !this.isMenuShown;
  }

  logAnimation($event) {
    console.log(`${this.isMenuShown} animation ${$event.phaseName}`);
  }

  @HostListener("click")
  click() {
    // console.log(this.isMenuShown);
    this.appService.toggle();
  }
}
