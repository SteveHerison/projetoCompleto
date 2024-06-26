import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" h-20 w-full container m-auto px-2">
      <section className="flex justify-between items-center h-full w-full">
        <h1 className="text-2xl">Logo</h1>
        <ul className="flex space-x-4">
          <li className="cursor-pointer border p-2 rounded-xl bg-Verydarkblue text-white bg-opacity-40">
            <Link to="/signin"> SignIn</Link>
          </li>
          <li className="cursor-pointer border p-2 rounded-xl bg-Verydarkblue text-white bg-opacity-40 ">
            <Link to="/"> SignUp</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
