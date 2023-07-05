import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Api() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setUserData(res.data);
    });
  }, []);
  return (
    <div className="App">
      {userData.map((data) => {
        return <div>{data.name}</div>;
      })}
    </div>
  );
}
