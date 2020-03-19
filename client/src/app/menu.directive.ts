import { Directive, Output, HostListener, EventEmitter } from "@angular/core";

@Directive({
  selector: "[appMenu]",
  exportAs: "nesto"
})
export class MenuDirective {
  constructor() {}
  isMenuShown = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  nestoInChild: boolean;

  @HostListener("click", ["$event"])
  public onListenerTriggered(event: any): void {
    this.isMenuShown = !this.isMenuShown;
    console.log("iz direktive:::: " + this.isMenuShown);
    this.change.emit(this.isMenuShown);
  }
}
