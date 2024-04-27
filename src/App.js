import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const projectID = "9b38ab37-8b73-4f3a-b507-d4d36e0bf8c3";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
      <SpeedInsights />
    </>
  );
};

export default App;
