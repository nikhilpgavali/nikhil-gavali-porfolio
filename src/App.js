import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import PersonalExperience from "./components/PersonalExperience";

function App() {
  return (
    <main className="flex flex-col justify-evenly">
      {/*<Introduction />*/}
      <About />
      <Skills />
      <PersonalExperience />
    </main>
  );
}

export default App;
