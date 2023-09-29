import Header2 from "../Static2/Header2";
import Footer2 from "../Static2/Footer2";
import { Outlet } from "react-router-dom";

const Layout2 = () => {
  return (
    <div>
      <Header2 />
      <Outlet />
      <Footer2 />
    </div>
  );
};

export default Layout2;
