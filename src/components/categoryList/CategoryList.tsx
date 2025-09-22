import "./CategroyList.css"
import CategoryCard from "../categoryCard/CategoryCard"
import { CategoryItems } from "../../data/CategoryItems"

export default function CategoryList() {
  return (
    <>
      <section className="section_filter_cards">
        {CategoryItems &&
          CategoryItems.map((item: string, index) => {
            return (
              <div key={index} className="wrapper_categories_card">
                <CategoryCard title={item} link={`category/${item.toLowerCase()}`} />
              </div>
            )
          })}
      </section>
    </>
  )
}
