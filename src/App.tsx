
import { IProject } from './services/projectService';
import './App.scss';
import HeroContent from './components/heroContent/heroContent';
import Footer from './components/footer/footer';
import ProjectCard from './components/projectCard/projectCard';

function App() {

  const projectNames: IProject[] = [
    {
      name: "Pokedex"
    },
    {
      name: "MacroCounter"
    },
    {
      name: "PasswordGenerator"
    }, 
    {
      name: "MathWiz"
    },
    {
      name: "ColourGenerator"
    },
    // {
    //   name: "Notes"
    // } 
];  

  return (
    <div className="App">
      <HeroContent />
      <div id="content-section" className="content-section">
        <h1 className="section-header">Projects</h1>
        {projectNames && projectNames.map(project => <ProjectCard {...project} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
