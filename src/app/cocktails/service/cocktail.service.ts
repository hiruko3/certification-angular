import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Cocktail} from "../../model/cocktail.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private url: string = '/cockails';

  constructor(private http:HttpClient) { }

  /**
   * Http client retrieves all cocktails
   */
  getAllCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.url)
  }

  /**
   * Find one cocktail from its cocktailId
   * @param cocktailId
   */
  findOne(cocktailId: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(this.url + `/${cocktailId}`)
  }
}
