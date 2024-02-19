function Notification(props) {
  return (
    <div className="notification">
      <div className="author-pic">
        <img src={props.image} alt="profile" />
      </div>
      <div className="notification-info">
        <div className="top-line">
          <h3 className="name">{props.name}</h3>
          <span className="notification-message">{props.message}</span>
          <h4 className="target-post">{props.post}</h4>
          <button></button>
        </div>
        <div className="bottom-line">
          <span>
            <span className="post-time">{props.time}</span> ago
          </span>
        </div>
        <div className={props.messageText !== "" ? "message-box" : null}>
          <p>{props.messageText}</p>
        </div>
      </div>
      <div className="target-photo">
        <img
          src={props.targetImage}
          alt={props.targetImage !== null ? "targetImage" : null}
        />
      </div>
    </div>
  );
}

export default Notification;
