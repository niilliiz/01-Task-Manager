import React from "react";
import Classes from "./showCase.module.css";

const showCase = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const date = new Date();

  const numDay = date.getDay();
  const today = days[numDay];
  console.log(date.getDate());
  return (
    <div className={Classes.ShowCase}>
      <p>
        Today
        {" " + today + " " + date.getDate()}
      </p>
    </div>
  );
};

export default showCase;

// let transformedDate = [
//   ...date.toLocaleDateString("en-US", options).split(" "),
// ];
// let today = transformedDate.map((el) => {
//   const index = el.indexOf(",");
//   if (el.endsWith(",")) {
//     return el.substr(0, index);
//   } else {
//     return el;
//   }
// });
