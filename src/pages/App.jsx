import backgroundImage from "../../images/pattern-hills.svg";
import backgroundEster from "../../images/bg-stars.svg";
import Header from "../components/Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const App = () => {
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
      <SignUp />
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

export default App;
