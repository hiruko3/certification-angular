import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CocktailService} from "./cocktails/service/cocktail.service";
import {CocktailStateService} from "./cocktails/service/cocktail-state.service";
import {Cocktail} from "./model/cocktail.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{

  constructor(private cocktailService: CocktailService, private cocktailStateService: CocktailStateService) {
  }
  // init data once
  ngOnInit(): void {
    // we call the http service once, then we initialise our state data that handles business logic
    this.cocktailService.getAllCocktails().subscribe((cocktails: Cocktail[]): void => {
      this.cocktailStateService.initCocktails(cocktails);
    })
  }
}
