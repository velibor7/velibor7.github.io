import {
  Component,
  OnInit,
  OnDestroy,
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
import { MenuDirective } from "../menu.directive";

@Component({
  selector: "app-home",
  providers: [MenuDirective],
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
export class HomeComponent implements OnInit, OnDestroy {
  // inst: AppComponent;
  // menuState = "show";
  // @HostBinding("class.ovu-klasu-dodaje")
  isMenuShown = false;

  constructor(
    private appService: AppService,
    private menuDirective: MenuDirective
  ) {}

  ngOnInit(): void {
    // this.appService.change.subscribe(isMenuShown => {
    // this.isMenuShown = isMenuShown;
    // });
    this.menuDirective.change.subscribe(isMenuShown => {
      this.isMenuShown = isMenuShown;
    });
  }

  recieveShit($event) {
    this.isMenuShown = $event;
    console.log("shitty try: " + this.isMenuShown);
  }

  ngOnDestroy(): void {
    this.appService.change.unsubscribe();
    this.menuDirective.change.unsubscribe();
  }

  public get menuState() {
    console.log("iz homea " + this.isMenuShown);
    return this.isMenuShown ? "show" : "hide";
  }
}

// THIS IS HOME COMPONENT
