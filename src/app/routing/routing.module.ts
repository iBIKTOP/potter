import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HousesComponent } from '../houses/houses.component';
import { CharactersComponent } from '../characters/characters.component';
import { CharacterComponent } from '../character/character.component';

const routes: Routes = [
  {path: '', redirectTo: '/houses', pathMatch: 'full'},
  {path: 'houses', component: HousesComponent},
  {path: 'characters/:house', component: CharactersComponent},
  {path: 'character/:id', component: CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
