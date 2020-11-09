import MainNav from "./MainNav";

const menuContainer = {
  position: "absolute",
  top: "0",
  right: "0",
};

const ionIcon = {
  position: "relative",
  zIndex: "99",
};

const MenuIcon = () => {
  function toggleMenu() {
    const nav = document.querySelector("nav");
    const doc = document;
    let liArr = document.querySelectorAll("li");

    doc.addEventListener("dblclick", () => {
        nav.style.display = "none";
      })
    
    liArr = [...liArr].forEach(li => li.addEventListener("click", () => {nav.style.display = "none";}))

    liArr();

    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }

  return (
    <div style={menuContainer}>
      <ion-icon
        id="menu"
        style={ionIcon}
        name="menu-sharp"
        onClick={toggleMenu}
      ></ion-icon>
      <MainNav />
    </div>
  );
};

export default MenuIcon;
