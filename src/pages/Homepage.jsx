import "../styles/style.scss";
import data from "../helper/data";
import Picture from "../components/Picture";

const Homepage = () => {
  return (
    <div className="main-container">
      {data.map((item, index) => <Picture {...item} key={index} />
      )}
    </div>
  );
};

export default Homepage;
