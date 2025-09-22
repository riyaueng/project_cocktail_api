import { useContext, useEffect } from "react"
import "./CategoryCard.css"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"
import { Link } from "react-router"

interface CategoryCardProps {
  title: string
  link: string
}

export default function CategoryCard(props: CategoryCardProps) {
  const { setDrinks, setLink } = useContext(mainContext) as MainProviderProps

  useEffect(() => {
    setLink(props.title.toLowerCase())
  }, [props.title])

  console.log(props.link)
  return (
    <>
      <div>
        <Link to={props.title}>
          <h2>{props.title}</h2>
          <p>Ipsum dolor sit amet</p>
        </Link>
      </div>
    </>
  )
}
