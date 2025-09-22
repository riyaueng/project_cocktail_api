export interface ICocktails {
  drinks: ICocktails[]
}

export interface ICocktail {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

export interface ICocktailDetails {
  drinks: ICocktailDetail[]
}

export interface ICocktailDetail {
  idDrink: number
  strDrink: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
  strInstructionsDE: string
  strImageSource: string
}
