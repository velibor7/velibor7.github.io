import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable()
export class AppService {
  isMenuShown = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    // console.log("?!?!");
    // 2. kada je tamo pozvana click() fja
    // ovde se menja lokalno isMenuShown
    // ostale aplikacije se subbuju ovde, da pokupe info
    //? mislim da zbog emita moze da se sub? ili zbog service
    this.isMenuShown = !this.isMenuShown;
    this.change.emit(this.isMenuShown);
  }
}
