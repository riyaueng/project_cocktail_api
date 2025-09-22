import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import Home from "./pages/home.tsx/Home"
import Submit from "./pages/submit/Submit"
import CategoryDrinks from "./components/categoryDrinks/CategoryDrinks"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:drink" element={<CategoryDrinks />} />
        <Route path="/:details" element={""} />
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
