import React from "react";

const AppContext = React.createContext({
  loggedInUser: {
    userName: "",
    games: [],
    stats: { gamesPlayed: 0, avgContribution: 0, totalContribution: 0 },
  },
  // setLoggedInUser: (data: any) => {
  //   // console.log("data from context: ", data);
  //   console.log(
  //     "if you're seeing this, something is wrong. This should be overriden with the correct fn"
  //   );
  // },
});

export default AppContext;
