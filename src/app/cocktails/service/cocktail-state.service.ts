import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Cocktail} from "../../model/cocktail.model";

@Injectable({
  providedIn: 'root'
})
export class CocktailStateService {

  constructor() {
  }

  private cocktails: Cocktail[];
  private cocktails$: WritableSignal<Cocktail[]> = signal([]);

  /**
   * Init the cocktails and add them as favorite if stored in the localStorage
   * @param cocktails
   */
  public initCocktails(cocktails: Cocktail[]) {
    this.cocktails = cocktails;
    this.cocktails$.set(this.cocktails);
  }

  /**
   * Get all cocktails as readOnly to protect direct access to the data
   * and force the use of methods designed for it
   */
  getAllCocktails(): Signal<Cocktail[]> {
    this.addFavoriteCocktailFromStorage(this.cocktails);
    return this.cocktails$.asReadonly();
  }

  /**
   * When user click on the star, we add or remove, depends on the actual state, the cocktail from
   * the favorite list
   * We add it to the localStorage
   * Not emitting, no one care about that changes into the localStorage
   * @param cocktail
   */
  storeIfFavoriteCocktail(cocktail: Cocktail): void {
    this.addOrRemoveLocalStorageIfFavorite(cocktail);
  }

  /**
   * Add or remove the cocktail from the favorite list stored in the localStorage
   * @param cocktail
   * @private
   */
  private addOrRemoveLocalStorageIfFavorite(cocktail: Cocktail): void {
    if (cocktail.isFavorite) {
      localStorage.setItem(cocktail.id, String(cocktail.isFavorite));
    } else {
      if (localStorage.getItem(cocktail.id)) {
        localStorage.removeItem(cocktail.id);
      }
    }
  }

  /**
   * Set isFavorite to true if the cocktail is stored as favorite in the localStorage
   * @param cocktails
   * @private
   */
  public addFavoriteCocktailFromStorage(cocktails: Cocktail[]): void {
    cocktails.forEach((cocktail: Cocktail): void => {
      if (localStorage.getItem(cocktail.id)) {
        cocktail.isFavorite = true;
      }
    })
  }

  /**
   * Update the cocktail in the cache list when the user update a cocktail (click on the star here)
   *
   * @param cocktailUpdatedFromStar
   */
  updateCocktail(cocktailUpdatedFromStar: Cocktail): void {
    this.cocktails$.update((cocktails: Cocktail[]) => cocktails.map((cocktail: Cocktail): Cocktail =>
      cocktail.id === cocktailUpdatedFromStar.id ? cocktailUpdatedFromStar : cocktail));
  }
}
