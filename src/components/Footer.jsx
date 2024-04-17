function Footer() {
  const dateYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {dateYear}</p>
    </footer>
  );
}

export default Footer;
