import logo from './logo.png';

export default function TopBar() {
    return (
        <div className="top-bar">
            <a href="https://tinyurl.com/iessiendev"><img src={logo} alt="logo-iessiendev" /></a>
            <ion-icon name="ellipsis-vertical"></ion-icon>
        </div>
    );
}