import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>MuseoHub</p>
      <div>React · Vite · Express · SQLite</div>
      <p>&copy; {new Date().getFullYear()} robertocastelli.dev </p>
    </footer>
  );
}

export default Footer;
