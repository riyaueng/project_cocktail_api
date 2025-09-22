import { useContext, useEffect, useState } from "react"
import type { ICocktail, ICocktailDetails } from "../../interfaces/ICocktails"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"
import { Link, useParams } from "react-router"

interface DrinkCardProps {
  cocktailName: ICocktail
}

export default function DrinkCard(props: DrinkCardProps) {
  const { drinkId, setDrinkId, setLink } = useContext(mainContext) as MainProviderProps
  const [open, setOpen] = useState<boolean>(false)
  const { details } = useParams()

  console.log(drinkId)

  useEffect(() => {
    setLink(details?.toLowerCase())
  }, [details])

  console.log(details)

  const openModal = () => {
    setDrinkId(drinkId)
    setOpen(true)
  }

  return (
    <>
      <Link to={`/${details}`} onClick={openModal}>
        <h3>{props.cocktailName.strDrink}</h3>
        <img src={props.cocktailName.strDrinkThumb} alt={props.cocktailName.strDrink} />
      </Link>
    </>
  )
}
