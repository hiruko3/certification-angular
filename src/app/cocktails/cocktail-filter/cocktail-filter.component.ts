import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cocktail-filter',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  ],
  templateUrl: './cocktail-filter.component.html',
  styleUrl: './cocktail-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailFilterComponent {

  @Output("filter") textFilter: EventEmitter<string> = new EventEmitter<string>();

  filter(value: string): void {
    this.textFilter.emit(value)
  }
}
