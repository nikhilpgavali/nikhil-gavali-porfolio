import profilePic from "../images/my-pic.png";

export default function Introduction() {
  return (
    <section>
      <div className="absolute left-9 m-0.5">
        <h1 className="text-[12rem] mt-[12rem]">Hello</h1>
        <h1 className="text-[12rem] mt-[12rem]">I'm</h1>
        <h1 className="text-[12rem] mt-[12rem]">Nikhil</h1>
        <h1 className="text-[12rem] mt-[12rem] ml-32">Gavali</h1>
      </div>
      <div className="text-4xl absolute top-[85%] left-[10%] leading-10 text-[#615ca1]">
        <p>Full Stack Developer</p>
        <p>& Passionate About Coding</p>
      </div>
      <div className="pic-container">
        {/*<img className="my-pic" src={profilePic} height={800}></img>*/}
      </div>
    </section>
  );
}
