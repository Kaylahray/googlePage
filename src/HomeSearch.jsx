import google from "./images/google.png";
import "./homeSearch.css";
// import Search from "./Search";
import { useState } from "react";

function HomeSearch() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);

  return (
    <div className="container">
      <img src={google} alt="google" className="google-img" />
      <div className="input">
        <button
          type="submit"
          value={input}
          id="btn"
          onClick={() => setSearch((prev) => !prev)}
        >
          <i className="ri-search-eye-line"></i>
        </button>
        <input
          placeholder="Search here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <i className="ri-mic-line"></i>
        <i className="ri-camera-line"></i>
      </div>

      {search && <p> {input}</p>}

      <div className="box">
        <div>
          <p>Google Search</p>
        </div>
        <div>
          <p> I'm Feeling Lucky</p>
        </div>
      </div>
      <div className=" languages">
        <p>Google offered in:</p>

        <ul className="list-lang">
          <li>
            <a href="/">
              <p>Hausa</p>
            </a>
          </li>
          <li>
            <a href="/">
              <p>Igbo </p>
            </a>
          </li>
          <li>
            <a href="/">
              <p> Yoruba</p>
            </a>
          </li>
          <li>
            <a href="/">
              <p> Nigerian pidgin</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeSearch;
