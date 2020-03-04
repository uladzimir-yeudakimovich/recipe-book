import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyALw41fzGgRwZtWC0nwSaNPinN96qGVKN8",
      authDomain: "ng-recipe-book-84c52.firebaseapp.com"
    });
  }

}
