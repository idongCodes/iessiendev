import { SideBar } from './SideBar';

function MainContent() {
    return(
        <div className='main-content'>
            <SideBar />
            <div>Main Content</div>
        </div>
    );
}

export {
    MainContent,
};