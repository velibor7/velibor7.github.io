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
export class HomeComponent implements OnChanges, OnInit, OnDestroy, DoCheck {
  @Input() message: string;
  @Input() state: any;

  isMenuShown: boolean;
  constructor(
    private appService: AppService,
    private menuDirective: MenuDirective
  ) {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log("state: " + this.state);
    console.log("message: " + this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnDestroy(): void {
    //this.appService.change.unsubscribe();
    //this.menuDirective.change.unsubscribe();
  }

  public get menuS() {
    return this.state ? "show" : "hide";
  }
}
