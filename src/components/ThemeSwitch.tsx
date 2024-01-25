import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(false);
  return (
    <label className="swap">
      <input
        className="theme-controller"
        type="checkbox"
        value={theme ? "light" : "dark"}
        onClick={() => setTheme(!theme)}
      />
      <span className="swap-on">
        <Sun />
      </span>
      <span className="swap-off">
        <Moon />
      </span>
    </label>
  );
};

export default ThemeSwitch;
