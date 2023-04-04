import "./App.css";
import HeaderNav from "./HeaderNav";
import HomeSearch from "./HomeSearch";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <HomeSearch />
      <Footer
        country="Nigeria"
        about="about"
        advertising="advertising"
        x="Business"
        y="How Search Work"
        carbon="carbon neutral since 2007"
        privacy="Privacy"
        terms="Terms"
        setting="Setting"
      />
    </div>
  );
}

export default App;
