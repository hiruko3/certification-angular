import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {Location, NgOptimizedImage} from '@angular/common';
import {MatIcon} from "@angular/material/icon";
import {CocktailService} from "../service/cocktail.service";
import {Cocktail} from "../../model/cocktail.model";
import {CocktailComponent} from "../cocktails-list/cocktail/cocktail.component";
import {CocktailStateService} from "../service/cocktail-state.service";
import {concatAll, map} from "rxjs";
import {BadgeAlcoholicComponent} from "../cocktails-list/cocktail/badge-alcoholic/badge-alcoholic.component";
import {FavoriteCocktailComponent} from "../cocktails-list/cocktail/favorite-cocktail/favorite-cocktail.component";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    CocktailComponent,
    BadgeAlcoholicComponent,
    FavoriteCocktailComponent,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatDivider,
    NgOptimizedImage
  ],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailDetailsComponent implements OnInit {

  protected cocktail: Cocktail | undefined;

  /**
   * Inject dependencies
   * @param router
   * @param location
   * @param cocktailService
   * @param cocktailStateService
   * @param cd
   */
  constructor(private router: ActivatedRoute,
              private location: Location,
              private cocktailService: CocktailService,
              private cocktailStateService: CocktailStateService,
              private cd: ChangeDetectorRef) {

  }

  /**
   * Retrieve data from HttpService here, no need to wrap it for the moment
   */
  ngOnInit(): void {
    this.router.params.pipe(
      map((param: Params): string => {
        return param['id'];
      }),
      map((id: string) => {
        return this.cocktailService.findOne(id)
      }),
      concatAll())
      .subscribe((cocktail: Cocktail) => {
        this.cocktailStateService.addFavoriteCocktailFromStorage([cocktail])
        this.cocktail = {...cocktail};
        this.cd.markForCheck();
      })
  }

  /**
   * Back to the last route url
   */
  navigateBack(): void {
    this.location.back();
  }
}
