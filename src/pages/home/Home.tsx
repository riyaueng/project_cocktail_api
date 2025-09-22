import React, { useContext } from "react"
import CategoryList from "../../components/categoryList/CategoryList"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"
import type { IDrink } from "../../interfaces/ICategories"
import CategoryButton from "../../components/categoryButton/CategoryButton"

export default function Home() {
  const { category } = useContext(mainContext) as MainProviderProps

  return (
    <>
      <section className="section_filter_btns">
        {category &&
          category.map((item: IDrink, index) => {
            return (
              <div key={index} className="wrapper_categories">
                <CategoryButton item={item} />
              </div>
            )
          })}
      </section>

      <section>
        <CategoryList />
      </section>
    </>
  )
}
