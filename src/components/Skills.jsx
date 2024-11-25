export default function Skills() {
  return (
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
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="col-cls backend-skills">
          <h3>BACKEND</h3>
          <ul className="skill-list">
            <li>NodeJs</li>
            <li>NestJs</li>
            <li>ExpressJs</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div className="col-cls devops-skills">
          <h3>Cloud</h3>
          <ul className="skill-list">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-stone-300"
                href="https://www.credly.com/badges/96db2417-f220-48b0-958f-1fa580495b97/public_url"
              >
                AWS
              </a>
            </li>
          </ul>
        </div>
        <div className="col-cls database-skills">
          <h3>DATABASE</h3>
          <ul className="skill-list">
            <li>Mongo DB</li>
            <li>Postgres SQL</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className="col-cls mobile-skills">
          <h3>ANDROID</h3>
          <ul className="skill-list">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-stone-300"
                href="https://play.google.com/store/apps/details?id=tech.nexseliot.nexsel&pcampaignid=web_share"
              >
                Flutter
              </a>
            </li>
            <li>Dart</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
