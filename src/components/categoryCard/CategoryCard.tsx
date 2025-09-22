import "./CategoryCard.css"
import { Link } from "react-router"

interface CategoryCardProps {
  item: string
}

export default function CategoryCard(props: CategoryCardProps) {
  return (
    <>
      <div>
        <Link to={`/${props.item.toLowerCase()}`}>
          <h2>{props.item}</h2>
          <p>Ipsum dolor sit amet</p>
        </Link>
      </div>
    </>
  )
}
