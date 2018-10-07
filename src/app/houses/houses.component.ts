import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses: any[];
  constructor(private potterService: PotterService) { }

  showHouses() {
    this.potterService.getHouses().subscribe((data: any[]) => this.houses = data);
  }
  ngOnInit() {
    this.showHouses();
  }

}
