import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable()
export class AppService {
  isMenuShown = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isMenuShown = !this.isMenuShown;
    this.change.emit(this.isMenuShown);
  }
}
