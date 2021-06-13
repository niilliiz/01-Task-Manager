import React from "react";

const authContext = React.createContext({
  inbox: 0,
  completed: 0,
  showInputSection: () => {},
  updatingTask: () => {},
  cancelingAddinTask: () => {},
});
export default authContext;
