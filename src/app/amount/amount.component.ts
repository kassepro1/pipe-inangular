import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

  amount = 2000000000;
  am = 2000.3436354;
  name ="KASSE Momar Talla"
  myDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
