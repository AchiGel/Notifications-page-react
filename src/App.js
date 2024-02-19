import "./App.css";
import Header from "./components/Header";
import Notification from "./components/Notification";
import angela from "../src/assets/images/avatar-angela-gray.webp";
import anna from "../src/assets/images/avatar-anna-kim.webp";
import jacob from "../src/assets/images/avatar-jacob-thompson.webp";
import kimberly from "../src/assets/images/avatar-kimberly-smith.webp";
import mark from "../src/assets/images/avatar-mark-webber.webp";
import nathan from "../src/assets/images/avatar-nathan-peterson.webp";
import rizky from "../src/assets/images/avatar-rizky-hasanuddin.webp";
import kimberlyTarget from "../src/assets/images/image-chess.webp";

function App() {
  const notifications = [
    {
      read: false,
      image: mark,
      name: "Mark Webber",
      message: "reacted to your recent post",
      post: "My first tournament today!",
      time: "1m",
      "message-text": "",
      "target-image": null,
    },
    {
      read: false,
      image: angela,
      name: "Angela Gray",
      message: "followed you",
      post: "",
      time: "5m",
      "message-text": "",
      "target-image": null,
    },
    {
      read: false,
      image: jacob,
      name: "Jacob Thompson",
      message: "has joined your group",
      post: "Chess Club",
      time: "1 day",
      "message-text": "",
      "target-image": null,
    },
    {
      read: true,
      image: rizky,
      name: "Rizky Hasanuddin",
      message: "sent you a private message",
      post: "",
      time: "5 Days",
      "message-text":
        "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      "target-image": null,
    },
    {
      read: true,
      image: kimberly,
      name: "Kimberly Smith",
      message: "commented on your picture",
      post: "",
      time: "1 Week",
      "message-text": "",
      "target-image": kimberlyTarget,
    },
    {
      read: true,
      image: nathan,
      name: "Nathan Peterson",
      message: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks",
      "message-text": "",
      "target-image": null,
    },
    {
      read: true,
      image: anna,
      name: "Anna Kim",
      message: "left the group",
      post: "Chess Club",
      time: "2 weeks",
      "message-text": "",
      "target-image": null,
    },
  ];
  return (
    <div className="App">
      <div className="wrapper">
        <Header length={notifications.filter((post) => !post.read).length} />
        <div className="notifications">
          {notifications.map((item, index) => {
            return (
              <Notification
                key={index}
                read={item.read}
                image={item.image}
                name={item.name}
                message={item.message}
                post={item.post}
                time={item.time}
                messageText={item["message-text"]}
                targetImage={item["target-image"]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
