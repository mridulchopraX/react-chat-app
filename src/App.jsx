import ChatWindow from "./ChatWindow/ChatWindow.jsx";
import SidePanel from "./SidePanel/SidePanel.jsx";

function App() {
  return (
    <div className="mainContainer">
      <SidePanel />
      <ChatWindow />
    </div>
  );
}

export default App;
