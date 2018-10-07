import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  house: string;
  characters: any[];
  constructor(private route: ActivatedRoute, private potterService: PotterService) {}

  ngOnInit() {
    this.route.params.subscribe(({house}) => {
      this.house = house;
      this.potterService.getCharacters(house).subscribe((characters: any[]) => {
        // console.log(characters);
        this.characters = characters;
      });
    });
  }
}
