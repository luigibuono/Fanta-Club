import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor() { }

  scrollToTop():void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
}
