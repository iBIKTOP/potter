import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PotterService} from '../potter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: any;
  name: string;
  objectKeys = Object.keys;

  constructor(private route: ActivatedRoute, private potterService: PotterService, private location: Location) { }

  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      // console.log(id);
      this.potterService.getCharacter(id).subscribe((character: any) => {
        this.character = character;
        // console.log(character);
        this.name = character.name;
      });
    });
  }

}
