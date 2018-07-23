import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My fucking application';
  version:Number = 1.0;
  disabled:Boolean = true;

  changeTitle(event){
    this.title = event.target.value;
  }
}
