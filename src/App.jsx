import ChatWindow from "./ChatWindow/ChatWindow.jsx";
import SidePanel from "./SidePanel/SidePanel.jsx";
import { useState } from "react";

function App() {
  const chat = {
    Mridul: [
      {
        sender: "Mridul",
        message: "Hi User !! How are you ? ",
      },
      {
        sender: "user",
        message: "I am good !! How are you ?",
      },
      {
        sender: "Mridul",
        message: "I am also good !! Are you free today ?",
      },
      {
        sender: "user",
        message: "Yes !! I am free today !!",
      },
      {
        sender: "Mridul",
        message: "Let's go for a movie !!",
      },
      {
        sender: "user",
        message: "Sure !!",
      },
    ],
    Yash: [
      {
        message: "Hi User !! What's Up ? ",
        sender: "Yash",
      },
      {
        message: "I am good !! What about you ?",
        sender: "user",
      },
      {
        message: "I am also good !! Any plans ?",
        sender: "Yash",
      },
      {
        message:
          "Me and my friends are going for a movie !! Do you want to join ?",
        sender: "user",
      },
    ],
  };

  const [receiver, setReceiver] = useState("Mridul");

  return (
    <div className="mainContainer">
      <SidePanel users={Object.keys(chat)} receiver={receiver} setReceiver={setReceiver}/>
      <ChatWindow chat={chat} receiver={receiver} />
    </div>
  );
}

export default App;
