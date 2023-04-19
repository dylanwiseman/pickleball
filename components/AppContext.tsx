import React, { Dispatch, SetStateAction } from "react";

type User = {
  userName: string;
  games: string[];
  _id: number;
  stats: {
    gamesPlayed: number;
    avgContribution: number;
    totalContribution: number;
  };
};

type AppContextType = {
  loggedInUser: User;
  setLoggedInUser: Dispatch<SetStateAction<User>>;
};

const AppContext = React.createContext<AppContextType>({
  loggedInUser: {
    userName: "",
    games: [],
    _id: 0,
    stats: { gamesPlayed: 0, avgContribution: 0, totalContribution: 0 },
  },
  setLoggedInUser: () => {},
});

export default AppContext;
