import { Outlet } from "react-router-dom";
import backgroundImage from "../../images/pattern-hills.svg";
import backgroundEster from "../../images/bg-stars.svg";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <main
      className="h-full w-full"
      style={{
        backgroundImage: `url(${backgroundEster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        position: "relative",
      }}>
      <Header />
      <div className="Main">
        <Outlet />
      </div>
      <div
        className="absolute  w-full bg-no-repeat bg-bottom "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          height: "29%",
        }}
      />
    </main>
  );
};

export default AuthLayout;
