import { useContext } from "react"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"

export default function CategoryDrinks() {
  const { drinks } = useContext(mainContext) as MainProviderProps

  console.log(drinks)
  return <div>CategoryDrinks</div>
}
