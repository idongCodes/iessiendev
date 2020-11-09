import MainNav from './MainNav';

// const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

// Styles
const menuContainer = {
    'position':'absolute',
    'top':'0',
    'right':'0'
}

const ionIcon = {
    'position':'relative',
    'zIndex':'99'
}

const toggleMenu = () => {
   if (nav.style.display == "block") {
    nav.style.display = "none";
   } else if (nav.style.display == "none"){
       nav.style.display = "block";
    }

}

const MenuIcon = () => {
    return (
        <div style={menuContainer}>
            <ion-icon id="menu" style={ionIcon} onClick={toggleMenu} name="menu-sharp"></ion-icon>
            <MainNav />
        </div>
    );
}

export default MenuIcon;