// import Registration from "../components/Registration";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <Registration></Registration> */}
      please log in to use app.
      <br />
      <Link to='/signin'>Sign in</Link>
    </div>
  );
};

export default Home;
