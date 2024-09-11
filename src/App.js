import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import ParticlesBg from 'particles-bg';



function App() {
  return (
    <div className="App">
       <ParticlesBg type="cobweb" color="#00C9FF" num={666}  bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {
      // <FaceRecognition />
            }
    </div>
  );
}

export default App;

