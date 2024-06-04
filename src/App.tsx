import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/HomePage";

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
                  <Route path="/posts" element={<>Posts</>} />
                  <Route path="/comments" element={<>Comments</>} />
                  <Route path="/users" element={<>Users</>} />
                  <Route path="*" element={<h1>No page found</h1>} />
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
