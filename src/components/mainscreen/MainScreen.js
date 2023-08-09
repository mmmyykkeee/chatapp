import React from "react";
import { ProfileStatus } from "../profile/ProfileStatus";
import Chats from "../chats/Chats";

const MainScreen = () => {
  return (
    <div>
      <div className="w-[75rem] h-[35rem] rounded-lg  flex justify-between">
        <ProfileStatus />
        <Chats />
      </div>
    </div>
  );
};

export default MainScreen;
