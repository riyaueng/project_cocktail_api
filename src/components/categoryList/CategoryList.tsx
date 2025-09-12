import { useContext } from "react"
import "./CategroyList.css"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"
import CategoryCard from "../categoryCard/CategoryCard"
import type { IDrink } from "../../interfaces/ICategories"

export default function CategoryList() {
  const { items, setLink } = useContext(mainContext) as MainProviderProps

  console.log(items)

  return (
    <>
      {items &&
        items.map((item: IDrink, index) => {
          return (
            <div key={index}>
              <CategoryCard item={item} />
            </div>
          )
        })}
    </>
  )
}
