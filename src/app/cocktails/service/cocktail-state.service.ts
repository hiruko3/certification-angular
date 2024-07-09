import {Injectable} from '@angular/core';
import {Cocktail} from "../../model/cocktail.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailStateService {

  constructor() {
  }

  private cocktails: Cocktail[];
  private cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([]);

  /**
   * Init the cocktails and add them as favorite if stored in the localStorage
   * @param cocktails
   */
  public initCocktails(cocktails: Cocktail[]) {
    this.addFavoriteCocktailFromStorage(cocktails);
    this.cocktails = cocktails;
    this.cocktails$.next(this.cocktails);
  }

  /**
   * Get all cocktails and subscribes to it
   */
  getAllCocktails(): Observable<Cocktail[]> {
    return this.cocktails$.asObservable();
  }

  /**
   * When user click on the star, we add or remove, depends on the actual state, the cocktail from
   * the favorite list, we then add it to the localStorage
   * Not emitting, noone care about that changes, and we lose the filter if we broadcast the change
   * @param cocktailId
   */
  changeFavoriteCocktail(cocktailId: string): void {
    let cocktail: Cocktail | undefined = this.cocktails.find((cocktail: Cocktail): boolean => cocktail.id === cocktailId)
    if (cocktail) {
      this.addOrRemoveLocalStorageIfFavorite(cocktail);
    }
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
   * Update the cocktail in the cache list if needed when the user update a cocktail outside the list
   * For exemple, on the /details cocktail we need to update the list too
   * @param cocktailUpdatedFromStar
   */
  updateCocktailIfNeeded(cocktailUpdatedFromStar: Cocktail): void {
    let cocktail: Cocktail | undefined = this.cocktails.find((cocktail: Cocktail): boolean => cocktail.id === cocktailUpdatedFromStar.id)
    if(cocktail && (cocktail.isFavorite !== cocktailUpdatedFromStar.isFavorite)) {
      cocktail.isFavorite = cocktailUpdatedFromStar.isFavorite
    }
  }
}
