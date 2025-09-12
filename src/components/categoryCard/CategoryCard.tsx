import React from "react"
import type { ICategory, IDrink } from "../../interfaces/ICategories"

interface CategoryItemProps {
  item: IDrink
}

export default function CategoryCard({ item }: CategoryItemProps) {
  console.log(`Card: ${item}`)
  return (
    <div>
      <h2>{item.strCategory}</h2>
      <p>Ipsum dolor sit amet</p>
    </div>
  )
}
