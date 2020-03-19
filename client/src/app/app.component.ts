import {
  Component,
  Output,
  EventEmitter,
  HostBinding,
  Input,
  HostListener,
  Directive
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
  message = "random msg";
  isMenuShown = false;

  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  public get menuState() {
    return this.isMenuShown ? "show" : "hide";
  }

  menuToggle() {
    this.isMenuShown = !this.isMenuShown;
  }

  logAnimation($event) {
    console.log(`${this.isMenuShown} animation ${$event.phaseName}`);
  }
}
