import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">SUE</div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Logout</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
