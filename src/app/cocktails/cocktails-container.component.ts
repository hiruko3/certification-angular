import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
   * cocktails list that is displayed in html and retrieve from mock
   */
  cocktailsList: Cocktail[] = [];
  /**
   * The list above filtered from the CocktailFilterComponent user's input
   */
  cocktailsListFiltered: Cocktail[] = [];

  /**
   * Inject dependecies
   * @param cocktailStateService
   * @param cd
   */
  constructor(private cocktailStateService: CocktailStateService, private cd: ChangeDetectorRef) {
  }

  /**
   * Parent that holds the responsibility to load data then share the data with its childs
   * No directly connected to the httpClient service, it uses cocktailStateService that handles
   * business logic
   */
  ngOnInit(): void {
    this.cocktailStateService.getAllCocktails().subscribe((cocktails: Cocktail[]) => {
      this.cd.markForCheck();
      // we keep the original data to filter
      this.cocktailsList = [...cocktails];
      this.cocktailsListFiltered = [...cocktails];
    })
  }


  /**
   * When user type something, we
   * @param text
   */
  filterCocktailList(text: string): void {
    if(text) {
      this.cocktailsListFiltered = this.cocktailsList.filter((cocktail: Cocktail) => cocktail.name?.toLowerCase().includes(text.toLowerCase()));
    } else{
      // we reset the list when no filter is given
      this.cocktailsListFiltered = [...this.cocktailsList];
    }
  }
}
