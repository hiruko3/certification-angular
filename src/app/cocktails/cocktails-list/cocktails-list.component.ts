import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CocktailComponent} from "./cocktail/cocktail.component";
import {MatProgressBar} from "@angular/material/progress-bar";
import {Cocktail} from "../../model/cocktail.model";

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [
    CocktailComponent,
    MatProgressBar
  ],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailsListComponent {

  @Input() cocktails: Cocktail[];
}
