import type { IDrink } from "../../interfaces/ICategories"
import "./CategoryButton.css"

interface CategoryButtonProps {
  item: IDrink
}

export default function CategoryButton({ item }: CategoryButtonProps) {
  return (
    <>
      <button>{item.strCategory}</button>
    </>
  )
}
