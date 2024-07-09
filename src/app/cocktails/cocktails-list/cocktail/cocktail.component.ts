import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatDivider} from "@angular/material/divider";
import {BadgeAlcoholicComponent} from "./badge-alcoholic/badge-alcoholic.component";
import {Cocktail} from "../../../model/cocktail.model";
import {FavoriteCocktailComponent} from "./favorite-cocktail/favorite-cocktail.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [
    MatCard,
    MatChip,
    NgClass,
    MatCardContent,
    MatCardHeader,
    NgOptimizedImage,
    MatDivider,
    BadgeAlcoholicComponent,
    FavoriteCocktailComponent,
    RouterLink
  ],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailComponent{

  @Input() cocktail: Cocktail | undefined;



}
