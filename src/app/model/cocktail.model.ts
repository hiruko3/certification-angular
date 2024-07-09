export class Cocktail {
  id!: string;
  name!: string;
  isAlcoholic!: boolean;
  imageUrl!: string;
  ingredients!: string[];
  isFavorite: boolean = false;
  instructions: string = "";
}
