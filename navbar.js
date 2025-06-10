document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (navbarContainer) {
    navbarContainer.innerHTML = `
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="puppies-for-sale.html">Puppies for Sale</a></li>
          <li><a href="reserve.html">Reserve</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    `;
    console.log("✅ Navbar injected successfully!");
  } else {
    console.error("❌ Navbar element not found!");
  }
});
