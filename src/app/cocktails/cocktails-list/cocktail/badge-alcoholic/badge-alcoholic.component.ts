import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatChip} from "@angular/material/chips";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-badge-alcoholic',
  standalone: true,
  imports: [
    MatChip,
    NgClass
  ],
  templateUrl: './badge-alcoholic.component.html',
  styleUrl: './badge-alcoholic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeAlcoholicComponent {

  /**
   * Change the background color (green noAlcoholic, red otherwise)
   */
  @Input() isAlcoholic: boolean = false;
}
