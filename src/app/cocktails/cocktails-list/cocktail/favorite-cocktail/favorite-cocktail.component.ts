import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CocktailStateService} from "../../../service/cocktail-state.service";
import {Cocktail} from "../../../../model/cocktail.model";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-favorite-cocktail',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './favorite-cocktail.component.html',
  styleUrl: './favorite-cocktail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteCocktailComponent {

  @Input() cocktail: Cocktail;

  constructor(private cocktailStateService: CocktailStateService) {

  }

  /**
   * When user click on the star we add or remove the cocktail from the favorite list
   *
   * @param cocktail
   */
  addOrRemoveFromFavorite(cocktail: Cocktail): void {
    cocktail.isFavorite = !cocktail.isFavorite;
    this.cocktailStateService.storeIfFavoriteCocktail(cocktail);
    this.cocktailStateService.updateCocktail(cocktail);
  }
}
