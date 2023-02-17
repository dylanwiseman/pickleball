import React from "react";

const AppContext = React.createContext({
  loggedInUser: { userName: "", games: [] },
  setLoggedInUser: (data: any) => {
    // console.log("data from context: ", data);
    console.log(
      "if you're seeing this, something is wrong. This should be overriden with the correct fn"
    );
  },
});

export default AppContext;
