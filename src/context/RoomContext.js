import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();
const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  //console.log(`adults ${adults}, kids ${kids}`);
  //console.log(Number(adults[0]))

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });
  const handleClick = (e) => {
    e.preventDefault();

    //filter rooms based on total person
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms(newRooms);
  };
  //console.log(rooms);
  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
