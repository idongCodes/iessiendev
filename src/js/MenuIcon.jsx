import MainNav from "./MainNav";

const menuContainer = {
  position: "absolute",
  top: "5px",
  right: "10px",
};

const ionIcon = {
  position: "relative",
  zIndex: "99",
  color:"#0047ab",
};

const MenuIcon = () => {
  function toggleMenu() {
    const nav = document.querySelector("nav");
    const doc = document;
    let liArr = document.querySelectorAll("li");

    doc.addEventListener("dblclick", () => {
        nav.style.display = "none";
      })
    
    for (let li of liArr) {
        li.addEventListener("click", () => {
            nav.style.display = "none";
        })
    }

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
