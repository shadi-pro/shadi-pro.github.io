
// First component [Header] :

import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
 
  // A]  [Shortcut menu]  Controling : 
  //  Defined a useState variable of storing the [boolean value] of show modal status for [ the displaing shortcut menu icon  ] :
  const [showModal, setshowModal] = useState(false);


  // B]  [light/dark] Modees  Controling :  
    // 1-  Define a [useState] varialbe  to store the toggling classes values of [light/dark] which will be automaticly assigned inside the body class values [with using dymnaic inital value 
      // from the {Local storage value} to reserve the last stored value of localstorage ] {with using substitution value for first time website visitor => by assigning the initial value of the useState with the local storage value } :
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

   // 2- Define a [useEffect] function  with conditional Reset the toggling {body}'s classes values of [light / dark] , by using the [HTML Dom] , accordigng to the retured value of [local storage] form the  browser  :
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => setshowModal(true)}
        className="menu icon-menu"
      ></button>

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href=""> About </a>
          </li>

          <li>
            <a href=""> Articles </a>
          </li>

          <li>
            <a href=""> Projects </a>
          </li>

          <li>
            <a href=""> Speaking </a>
          </li>

          <li>
            <a href=""> Contact Us </a>
          </li>
        </ul>
      </nav>

      <button
      // B] / 3- Assigning the proceess of sending the Conditional value to be stored inside local Storage to be used by [body class]  & Get it after to be assgined inside the defined [{theme} useState variable] as the last value of the current mode [to be sued in the next switch by this button onClick() ]   :
        onClick={() => {
          
          //  a- Sending/Storing the stored mode/theme value [conditional value according to the current stored value inside the {theme} useState variable] into the [local storage] , by using {setItem( 'key of value ' ,  'value to be set'   )} method :
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // b- Get the last stored value of  (mode/theme ) from the [local stroage : 'currentMode' ] & and set it inside the defined [{theme} useState variable]  :
          setTheme(localStorage.getItem("currentMode"));
        }}

        className="mode flex"
      >
        { 
          // B] / 4- Conditional set of the class value of [theme button] ,  according to the last stored value inside [{theme} useState variable] :    
          theme === 'dark' ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal border">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="icon-close"
              />
            </li>

            <li>
              <a href=""> About </a>
            </li>

            <li>
              <a href=""> Articles </a>
            </li>

            <li>
              <a href=""> Projects </a>
            </li>

            <li>
              <a href=""> Speaking </a>
            </li>

            <li>
              <a href=""> Uses </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
