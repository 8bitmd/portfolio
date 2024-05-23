import "../src/assets/styles/style.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";

const routesJSX = (
    <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
    </Route>
)

const routes = createRoutesFromElements(routesJSX)
const router = createBrowserRouter(routes)

function App() {
  return (
      <main>
        <RouterProvider router={router} />
      </main>
  );
}

export default App;
