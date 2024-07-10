import {ChangeDetectionStrategy, Component, computed, OnInit, Signal, signal} from '@angular/core';
import {Cocktail} from "../model/cocktail.model";
import {CocktailComponent} from "./cocktails-list/cocktail/cocktail.component";
import {CocktailStateService} from "./service/cocktail-state.service";
import {CocktailFilterComponent} from "./cocktail-filter/cocktail-filter.component";
import {CocktailsListComponent} from "./cocktails-list/cocktails-list.component";

@Component({
  selector: 'app-cocktails-container',
  standalone: true,
  imports: [
    CocktailComponent,
    CocktailFilterComponent,
    CocktailsListComponent,
  ],
  templateUrl: './cocktails-container.component.html',
  styleUrl: './cocktails-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailsContainerComponent implements OnInit {

  /**
   * The cocktail list filtered from the CocktailFilterComponent user's input
   */
  cocktailsListFiltered$: Signal<Cocktail[]> = signal([]);

  /**
   * the filter's value
   * @private
   */
  private valueToFilter: string = '';

  /**
   * Inject dependencies
   * @param cocktailStateService
   */
  constructor(private cocktailStateService: CocktailStateService) {
  }

  /**
   * Parent that holds the responsibility to load data then share the data with its children
   * No directly connected to the httpClient service, it uses cocktailStateService that handles
   * business logic
   */
  ngOnInit(): void {
    this.cocktailsListFiltered$ = this.cocktailStateService.getAllCocktails();
  }

  /**
   * When user type something, we filter the list no case-sensitive and compare
   * the text and the name of the cocktail
   */
  filterCocktailList = () => computed((): Cocktail[] => {
      return this.cocktailsListFiltered$().filter((cocktail: Cocktail): boolean => cocktail.name.toLowerCase().includes(this.valueToFilter.toLowerCase()))
  });

  /**
   * Save the filter's value emits by the filter
   * @param value
   */
  sendValueToFilter(value: string): void {
    this.valueToFilter = value;
  }
}
