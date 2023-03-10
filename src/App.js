// Style
import GlobalStyle from "./components/GlobalStyle.component";

// Pages
import { MainPage, SinglePage, Page404 } from "./pages/index.js";

// Router
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
