import React from "react";
import {add,sub,multi,div} from "./Calci";

function App() {
  return (
    <>
      <ul>
        <li className="cal">The Sum of two numbers is: {add(40, 4)}</li>
        <li className="cal">The Difference of two numbers is: {sub(40, 4)}</li>
        <li className="cal">The Product of two numbers is: {multi(40, 4)}</li>
        <li className="cal">The Division of two numbers is: {div(40, 3)}</li>
      </ul>
    </>
  )
}

export default App;