// creating a user context 

import { useState, createContext } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({});

  const signup = (data) => {
    // sending request to backend with axios
    axios.post("http://localhost:3000/auth/signup", data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

  };

  const login = (data) => {
    // sending request to backend with axios
    axios.post("http://localhost:3000/auth/login", data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };


  return (
    <UserContext.Provider value =  {{user,signup,login}}>
      {children}
    </UserContext.Provider>
  );
}

