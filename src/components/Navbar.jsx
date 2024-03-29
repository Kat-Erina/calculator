import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const themes = {
  cupcake: "cupcake",
  night: "night",
};
const Navbar = () => {
  let [theme, toggleTheme] = useState(
    localStorage.getItem("theme") || themes.cupcake
  );

  const changeTheme = () => {
    const { cupcake, night } = themes;
    const newTheme = theme === cupcake ? night : cupcake;
    toggleTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  document.documentElement.setAttribute("data-theme", theme);
  return (
    <nav className=" flex justify-end  px-3">
      {theme === "cupcake" ? (
        <FaMoon onClick={changeTheme} />
      ) : (
        <FaSun onClick={changeTheme} />
      )}
    </nav>
  );
};

export default Navbar;
