import "./App.css";
import githubLogo from "./images/logo-github.svg";
import linkedInLogo from "./images/logo-linkedin.svg";
import twitterLogo from "./images/logo-twitter.svg";
import downloadLogo from "./images/cloud-download-outline.svg";

function App() {
  return (
    <div className="App">
      <main>
        <section className="main-header">
          <div className="name-list">
            <h1 className="my-name">Hello</h1>
            <h1 className="my-name">I'm</h1>
            <h1 className="my-name initial">Nikhil</h1>
            <h1 className="my-name sur-name">Gavali</h1>
          </div>
          <div className="about-me">
            <p>Full Stack Developer</p>
            <p>& Passionate About Coding</p>
          </div>
          <div className="pic-container">
            {/* <img className="my-pic" src={profilePic} height={800}></img> */}
          </div>
        </section>
        <section className="about">
          <div className="about-intro">
            <h1 className="rotate-about">About</h1>
            <ul className="biodata-lists">
              <li className="biodata-key">NAME</li>
              <span className="biodata-value">Nikhil Gavali</span>
              <li className="biodata-key">BIRTHDAY</li>
              <span className="biodata-value">07.06.1992</span>
              <li className="biodata-key">ROLE</li>
              <span className="biodata-value">Full Stack Developer</span>
              <li className="biodata-key">EMAIL</li>
              <span className="biodata-value">nikhilgavali07@gmail.com</span>
              <li className="biodata-key">PHONE</li>
              <span className="biodata-value">(+91) 8073081305</span>
              <li className="biodata-key">WEBSITE</li>
              <span className="biodata-value">nikhilgavali.com</span>
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
                <a href="#">
                  <img
                    className="icons"
                    src={twitterLogo}
                    alt="twitter"
                    height={20}
                    width={20}
                  ></img>
                </a>
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
            <div className="experiance">
              <div className="xp-cls">
                <h3 className="text-cls">EXPERIENCE</h3>
                <h3 className="number-cls">5+</h3>
              </div>
              <div className="xp-cls">
                <h3 className="text-cls">PROJECTS</h3>
                <h3 className="number-cls">5</h3>
              </div>
              <div className="xp-cls">
                <h3 className="text-cls">CLIENTS</h3>
                <h3 className="number-cls">3</h3>
              </div>
              <div className="xp-cls">
                <h3 className="text-cls">AWARDS</h3>
                <h3 className="number-cls">12</h3>
              </div>
            </div>
            <a
              href={require("./cv/Resume Nikhil Gavali (3) (2).pdf.pdf")}
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
        <section className="skills">
          <div className="skills-details">
            <h1 className="rotate-skills">Skills</h1>
            <div className="col-cls frontend-skills">
              <h3>FRONTEND</h3>
              <ul className="skill-list">
                <li>Angular</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div className="col-cls backend-skills">
              <h3>BACKEND</h3>
              <ul className="skill-list">
                <li>NodeJs</li>
                <li>Nest Js</li>
                <li>Express</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div className="col-cls devops-skills">
              <h3>DEVOPS</h3>
              <ul className="skill-list">
                <li>AWS</li>
                <li>API Gateway</li>
                <li>Lambda</li>
                <li>Cloudwatch</li>
                <li>CI/CD pipeline</li>
                <li>Github Actions</li>
                <li>Docker</li>
                <li>New Relic</li>
              </ul>
            </div>
            <div className="col-cls database-skills">
              <h3>DATABASE</h3>
              <ul className="skill-list">
                <li>Mongo DB</li>
                <li>Postgres SQL</li>
              </ul>
            </div>
            <div className="col-cls mobile-skills">
              <h3>ANDROID</h3>
              <ul className="skill-list">
                <li>Flutter</li>
                <li>Dart</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="personal-experiance">
          <h1 className="exp">Exp.</h1>
          <div className="years">
            <h3>December, 2017 - December, 2019</h3>
          </div>
          <div className="employer-details">
            <h3 className="role">Junior Developer</h3>
            <p className="description">
              During this period of time, I was a part of Infinity Labs. I was
              working as a MEAN Stack Developer with skills - Angular, NodeJs,
              Express Js, MongoDB, HTML, CSS and Docker.
            </p>
            <h4 className="location">Pune / India</h4>
          </div>
          <div className="years">
            <h3>December, 2019 - March, 2021</h3>
          </div>
          <div className="employer-details">
            <h3 className="role">Senior Developer</h3>
            <p className="description">
              During this period of time, I was a part of Exela Technology Pvt
              Ltd. I was working as a MEAN Stack Developer with skills -
              Angular, NodeJs, Express Js, MongoDB, HTML and CSS.
            </p>
            <h4 className="location">Pune / India</h4>
          </div>
          <div className="years">
            <h3>March, 2021 - Present</h3>
          </div>
          <div className="employer-details">
            <h3 className="role">Senior Developer</h3>
            <p className="description">
              Currently I am working in Globant India Pvt Lid. I am working as a
              backend Developer with skills - NodeJs, Nest Js, MongoDB, Postgres
              SQL, Typescript, AWS.
            </p>
            <h4 className="location">Pune / India</h4>
          </div>
        </section>
        <div></div>
      </main>
    </div>
  );
}

export default App;
