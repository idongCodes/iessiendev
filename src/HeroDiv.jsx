import me from './me.jpeg';

export default function HeroDiv() {
    return (
        <div className="hero-div">
            <div className="hero-overlay">
                <div className="hero-content">
                    <img src={me} alt="my selfie" className="me"/>
                    <h3>Coder • Programmer • Web Developer • Software Engineer</h3>
                    <p className="intro-copy">Full-Stack Software Engineer with a passion for building things, functionality, design, deployment and learning new technologies.</p>
                </div>
            </div>
        </div>
    );
}