import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Input
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

import { AppComponent } from "../app.component";
import { AppService } from "../app.service";

@Component({
  selector: "app-home",
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
export class HomeComponent implements OnInit {
  inst: AppComponent;

  @HostBinding("class.is-menu-shown")
  isMenuShown = false;

  constructor(private appService: AppService) {}

  // ja ovde slusam??
  // i need to unsub
  ngOnInit(): void {
    this.appService.change.subscribe(isMenuShown => {
      this.isMenuShown = isMenuShown;
    });
  }
  // jebo sam ti sve
  public get menuState() {
    console.log("iz homea " + this.isMenuShown);
    return this.isMenuShown ? "show" : "hide";
  }
}

// THIS IS HOME COMPONENT
