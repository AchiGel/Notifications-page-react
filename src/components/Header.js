function Header(props) {
  return (
    <header className="header">
      <div>
        <h2>Notifications</h2>
        <span>{props.length}</span>
      </div>
      <button>Mark all as read</button>
    </header>
  );
}

export default Header;
