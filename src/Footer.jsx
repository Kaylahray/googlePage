import "./footer.css";
const Footer = (props) => {
  const { country, about, advertising, x, y, carbon, privacy, terms, setting } =
    props;
  return (
    <footer className="footer">
      <div className="first">
        <p>
          <a href="/">{country}</a>
        </p>
      </div>
      <div className="second">
        <div className="one">
          <p>
            <a href="/">{about}</a>
          </p>
          <p>
            <a href="/">{advertising}</a>
          </p>
          <p>
            <a href="/">{x} </a>
          </p>
          <p>
            <a href="/">{y} </a>
          </p>
        </div>
        <div className="two">
          <p>
            <a href="/">{carbon}</a>
          </p>
        </div>
        <div className="three">
          <p>
            <a href="/">{privacy}</a>
          </p>
          <p>
            <a href="/">{terms} </a>
          </p>
          <p>
            <a href="/">{setting} </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
