import { Component, OnInit } from '@angular/core';
//import Developer from the parent of the current component so use '../' before the class path
import {Developer} from '../developer'

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  //Create a class level property called 'dev'
  dev:Developer;
  dev1:Developer;
  devs:Developer[];

  constructor() {
    //Create an instance of a developer inside of the constructor to assig values to the property called 'dev'
    this.dev = new Developer("Monirul","Molla","Java",2008);
    this.dev1 = new Developer("John","Papa","Angular",2000);
    this.devs =[new Developer("Monirul","Molla","Java",2008),
                    new Developer("Bill","Gates","UNIX",1970)];
   }

  ngOnInit() {
  }

}
