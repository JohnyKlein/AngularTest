import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha lista';
  coisas = [];
  coisa = "";

  addLista(){
    this.coisas.push(this.coisa);
  } 
}