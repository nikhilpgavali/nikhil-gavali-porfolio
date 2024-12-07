import githubLogo from "../images/logo-github.svg";
import twitterLogo from "../images/logo-twitter.svg";
import linkedInLogo from "../images/logo-linkedin.svg";
import downloadLogo from "../images/cloud-download-outline.svg";

export default function About() {
  return (
    <section className="about">
      <div className="about-intro">
        <h1 className="rotate-about">About</h1>
        <ul className="biodata-lists">
          <li className="biodata-key">NAME</li>
          <span className="biodata-value">Nikhil Gavali</span>
          
          <li className="biodata-key">ROLE</li>
          <span className="biodata-value">Full Stack Developer</span>
          <li className="biodata-key">EMAIL</li>
          <span className="biodata-value">nikhilgavali07@gmail.com</span>
          <li className="biodata-key">PHONE</li>
          <span className="biodata-value">(+91) 8073081305</span>
          <li className="biodata-key">WEBSITE</li>
          <span className="biodata-value">
            https://nikhil-gavali.netlify.app
          </span>
          <li className="biodata-key">LOCATION</li>
          <span className="biodata-value">Pune, India</span>
          <li className="biodata-key">INTERESTS</li>
          <span className="biodata-value">Books, Music</span>
          <li className="biodata-key">SOCIAL</li>
          <span className="biodata-value social-icons">
            <a
              href="https://github.com/nikhilpgavali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src={githubLogo}
                alt="git-hub"
                height={20}
                width={20}
              ></img>
            </a>
            {/*<a href="#">*/}
            {/*  <img*/}
            {/*    className="icons"*/}
            {/*    src={twitterLogo}*/}
            {/*    alt="twitter"*/}
            {/*    height={20}*/}
            {/*    width={20}*/}
            {/*  ></img>*/}
            {/*</a>*/}
            <a
              href="https://www.linkedin.com/in/nikhilpgavali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src={linkedInLogo}
                alt="linkedin"
                height={20}
                width={20}
              ></img>
            </a>
          </span>
        </ul>
      </div>
      <div>
        {/*<div className="experiance">*/}
        {/*<div className="xp-cls">*/}
        {/*  <h3 className="text-cls">EXPERIENCE</h3>*/}
        {/*  <h3 className="number-cls">6+</h3>*/}
        {/*</div>*/}
        {/*<div className="xp-cls">*/}
        {/*  <h3 className="text-cls">PROJECTS</h3>*/}
        {/*  <h3 className="number-cls">5</h3>*/}
        {/*</div>*/}
        {/*<div className="xp-cls">*/}
        {/*  <h3 className="text-cls">CLIENTS</h3>*/}
        {/*  <h3 className="number-cls">5</h3>*/}
        {/*</div>*/}
        {/*<div className="xp-cls">*/}
        {/*  <h3 className="text-cls">AWARDS</h3>*/}
        {/*  <h3 className="number-cls">0</h3>*/}
        {/*</div>*/}
        {/*</div>*/}
        <a
          href={require("../cv/Nikhil_latest_cv.pdf")}
          className="btn-cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>DOWNLOAD CV</span>
          <img
            className="icons doanlod-icon"
            src={downloadLogo}
            alt="download-logo"
            height={25}
            width={25}
          ></img>
        </a>
      </div>
    </section>
  );
}
