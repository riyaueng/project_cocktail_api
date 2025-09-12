import axios from "axios"
import { createContext, useEffect, useState } from "react"
import type { IDrink } from "../interfaces/ICategories"

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | null>(null)

export interface MainProviderProps {
  items: IDrink[] | null
  setLink: React.Dispatch<React.SetStateAction<string>>
}

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [link, setLink] = useState<string>("home")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<IDrink[] | null>(null)
  console.log(`Provider-Link: ${link}`)
  console.log(items)

  useEffect(() => {
    const getCocktailData = async () => {
      let url = ""
      if (link) {
        if (link === "home") {
          url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        }
        try {
          const resp = await axios.get(url)
          if (resp.data.drinks) {
            setItems(resp.data.drinks)
          }
        } catch (error) {
          console.log("Keine Cocktails verfügbar.", error)
        }
      }
    }
    getCocktailData()
  }, [link])

  return <mainContext.Provider value={{ items, setLink }}>{children}</mainContext.Provider>
}
