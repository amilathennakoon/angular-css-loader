import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-css-loader';
  showLoader = false;


  ShowLoader() {
    this.showLoader = true;
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.showLoader = !this.showLoader;
    }, 3000);
  }

}
