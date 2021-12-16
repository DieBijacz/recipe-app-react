import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
// import { Favorites } from "./components/pages/Favorites";
import { Random } from "./components/Random.js";
import Navbar from "./components/Navbar/Navbar.js";

const App = () => {
  // const api_term = `https://www.themealdb.com/api/json/v1/1/search.php?s='+term`
  // const api_id = `https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id`

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
        {/* <Favorites /> */}
        <Random />
      </Router>
    </>
  );
}

export default App;
