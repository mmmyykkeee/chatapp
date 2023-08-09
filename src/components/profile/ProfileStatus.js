import React from "react";

export const ProfileStatus = () => {
  const chats = [
    {
      profilePic: "https://picsum.photos/50",
      userName: "Jane",
      message: "Okay, Call me",
    },
    {
      profilePic: "https://picsum.photos/51",
      userName: "Tyler",
      message: "I sent it last night",
    },
    {
      profilePic: "https://picsum.photos/52",
      userName: "Sandy",
      message: "see you tomorrow",
    },
    {
      profilePic: "https://picsum.photos/49",
      userName: "Halsey",
      message: "i'll let you know",
    },
    {
      profilePic: "https://picsum.photos/48",
      userName: "Ashley",
      message: "i'm still waiting",
    },
  ];
  return (
    <div className="flex flex-col w-[20%]">
      <div className="flex justify-between bg-[#2F2C53] text-white rounded-tl-lg py-4 px-2">
        <p>Lama Chat</p>
        <div className="flex space-x-2 items-center">
          <img src="https://picsum.photos/25" className="rounded-full" alt="" />
          <p>John</p>
          <button className="border p-1 rounded bg-[#5E5B8A] text-xs">
            Logout
          </button>
        </div>
      </div>
      <div className="space-y-3 bg-[#3E3C62]  h-[31.3rem] rounded-bl-lg">
        <div className="text-white text-[12px] border-b border-gray-500 pl-3">
          <input
            className="bg-transparent w-full py-[10px]"
            placeholder="Find a user"
          />
        </div>
        <div className="space-y-1">
          {chats.map((chats, index) => {
            return (
              <div key={index}>
                <div className="flex items-center pl-2 py-1 space-x-3 cursor-pointer hover:bg-[#333]">
                  <div>
                    <img
                      src={chats.profilePic}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white">
                    <p className="font-[900]">{chats.userName}</p>
                    <p>{chats.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
