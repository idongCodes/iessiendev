function SideBar() {
    return(
        <div className='sidebar-container'>
            <h1 className='titles name-ttl'>Hi 👋,<br/>I'm Idong!</h1>
            <h4 className='titles position-ttl'>Full-Stack Sofware Engineer</h4>

            <div className='profile-img'></div>

            <p>
                Since January ‘20 I’ve gained { new Date().getMonth() } mos and { new Date().getDate() } days of remote experience - working both individually as well as in cross-functional agile/scrum teams, developing web apps, building algorithms and solving problems with code. I am passionate about programming/coding and eager to connect with other devs and engineers in the global tech community and to become significantly versed in various programming languages, web frameworks and best practices. I dream to one day become <div className='codekage-tooltip-trigger'>Codekage<span className='codekage-tooltip'>
                    Someone who is regarded as one of the strongest coders or programmers in the community.<br/><a href="https://naruto.fandom.com/wiki/Hokage" target="_blank" rel="noreferrer">see Hokage</a>
                </span></div> 😅!
            </p>

            <div className='skills'>
                <h3>Currently Frequenting:</h3>

                <div className="skills-icons">
                    <ion-icon name="logo-html5"></ion-icon>
                    <ion-icon name="logo-css3"></ion-icon>
                    <ion-icon name="logo-sass"></ion-icon>
                    <ion-icon name="logo-javascript"></ion-icon>
                    <ion-icon name="logo-react"></ion-icon>
                    <ion-icon name="logo-python"></ion-icon>
                    <ion-icon name="logo-github"></ion-icon>
                    <ion-icon name="logo-nodejs"></ion-icon>
                </div>
            </div>

            <small>
                &copy; { new Date().getFullYear() }, <a href='https://twitter.com/iessiendev' target='_blank' rel='noreferrer'>iessiendev</a>
                <a className='footer-icons' href='https://github.com/idongessien' target='_blank' rel='noreferrer'>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a className='footer-icons' href='https://linkedin.com/in/idongessien' target='_blank' rel='noreferrer'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </small>
        </div>
    );
}

export {
    SideBar,
};