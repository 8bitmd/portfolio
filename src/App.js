import "../src/assets/styles/style.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Projects from "./components/Project";

const routesJSX = (
    <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/projets"} element={<Projects />} />
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
