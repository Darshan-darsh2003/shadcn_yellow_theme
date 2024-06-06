import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/HomePage";
import { RoutePage, SUB_ROUTE_PAGES } from "./utils/routeData";

function App() {
  return (
    <>
      <>
        <Router>
          <div>
            <main>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  {SUB_ROUTE_PAGES.map((routePage: RoutePage) => (
                    <Route
                      key={routePage.path}
                      path={routePage.path}
                      element={routePage.element}
                    />
                  ))}
                </Route>
              </Routes>
            </main>
          </div>
        </Router>
      </>
    </>
  );
}

export default App;
