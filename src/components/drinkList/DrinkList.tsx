import { useContext, useEffect } from "react"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"
import { Link, useParams } from "react-router"
import type { ICocktail } from "../../interfaces/ICocktails"
import DrinkCard from "../drinkCard/DrinkCard"

export default function DrinkList() {
  const { drinks, setLink } = useContext(mainContext) as MainProviderProps
  const { drink } = useParams()

  useEffect(() => {
    setLink(drink?.toLowerCase())
  }, [drink])

  return (
    <>
      <div>
        {drinks &&
          drinks.map((cocktail: ICocktail, index) => {
            return (
              <div key={index} className="wrapper_categories_card">
                <DrinkCard cocktailName={cocktail} />
              </div>
            )
          })}
      </div>
    </>
  )
}
