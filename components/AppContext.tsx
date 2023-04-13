import React from "react";

const AppContext = React.createContext({
  loggedInUser: {
    userName: "",
    games: [],
    _id: 0,
    stats: { gamesPlayed: 0, avgContribution: 0, totalContribution: 0 },
  },
});

export default AppContext;
