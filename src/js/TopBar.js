import { MenuIcon } from './MenuIcon';
import { MainNav } from './MainNav';

function TopBar() {
    return(
        <div className='topbar'>
            <MenuIcon />
            <MainNav />
        </div>
    );
}

export { 
    TopBar,
};