import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Submit from "./pages/submit/Submit"
import DrinkList from "./components/drinkList/DrinkList"
import DrinkModal from "./components/drinkModal/DrinkModal"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:drink" element={<DrinkList />} />
        <Route path="/:details" element={<DrinkModal />} />
        <Route path="submit" element={<Submit />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
