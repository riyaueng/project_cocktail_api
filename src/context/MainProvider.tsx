import axios from "axios"
import { createContext, useEffect, useState } from "react"
import type { IDrink } from "../interfaces/ICategories"
import type { ICocktail } from "../interfaces/ICocktails"

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | null>(null)

export interface MainProviderProps {
  category: IDrink[] | null
  setLink: React.Dispatch<React.SetStateAction<string>>
  drinks: ICocktail[] | null
  setDrinks: React.Dispatch<React.SetStateAction<ICocktail[] | null>>
}

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [link, setLink] = useState<string>("home")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [category, setCategory] = useState<IDrink[] | null>(null)
  const [drinks, setDrinks] = useState<ICocktail[] | null>(null)
  // let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${link}`

  // # -------- Fetch für Drinks-Auswahl --------

  console.log(drinks)

  useEffect(() => {
    let url = ""
    const getDrinks = async () => {
      if (!link) {
        if (link === "gin") {
          url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
        } else if (link === "margarita") {
          url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        } else if (link === "vodka") {
          url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka"
        } else if (link === "rum") {
          url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum"
        } else if (link === "scotch") {
          url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=scotch"
        } else if (link === "random") {
          url = "www.thecocktaildb.com/api/json/v1/1/random.php"
        } else if (link === "non_alcoholic") {
          url = "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        }
        try {
          const resp = await axios.get(url)
          if (resp.data.drinks) {
            setDrinks(resp.data.drinks)
          }
        } catch (error) {
          console.error("Keine Drinks zur Auswahl.", error)
        }
      }
    }
    getDrinks()
  }, [link])

  console.log(link)

  // # -------- Fetch für Category-Buttons ----------

  useEffect(() => {
    const getCategoriesData = async () => {
      let url = ""
      if (link) {
        if (link === "home") {
          url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        }
        try {
          const resp = await axios.get(url)
          if (resp.data.drinks) {
            setCategory(resp.data.drinks)
          }
        } catch (error) {
          console.log("Keine Cocktails verfügbar.", error)
        }
      }
    }
    getCategoriesData()
  }, [link])

  return <mainContext.Provider value={{ category, setLink, drinks, setDrinks }}>{children}</mainContext.Provider>
}
