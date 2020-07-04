import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent{

  name = 'Mamta Bisht'
  src = 'https://picsum.photos/seed/picsum/100/100'
  imagePath = 'assets/images/logos/angular/logo-nav@2x.png';
  isDisabled: boolean = false;

  getValue(){
    return 5
  }

  getFirstName(){
    return 'Mamta'
  }

  getLastName(){
    return ' Bisht'
  }

  getValue1(){
    if('false'){
      console.log('dd')
    }
  }

}
