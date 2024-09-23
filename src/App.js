import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import ParticlesBg from 'particles-bg';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import FaceRecognition from './components/facerecognition/Facerecognition';
import { Component } from 'react';

const initialState = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: "new Date()"
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
      }

loadUser = (data) => {
  this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
  }})
}

calculateFaceLocation = (data) => {
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById("inputimage");
   const width = Number(image.width)
   const height = Number(image.height);
   return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    bottomRow: height - (clarifaiFace.bottom_row * height),
    rightCol: width - (clarifaiFace.right_col * width)

   }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      fetch('https://polar-fjord-45385-a0c6e73396d4.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://polar-fjord-45385-a0c6e73396d4.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

onRouteChange = (route) => {
  if (route === 'signin') {
    this.setState(initialState)
  } else if (route === "home") {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
  }


  render() {
    const { isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="App">
           <ParticlesBg type="cobweb" color="#00C9FF" num={666}  bg={true} />
           <Navigation isSignedIn={isSignedIn} onRouteChange = {this.onRouteChange} />
          { route === 'home'
          ?
          <div>
              <Logo />
              <Rank userName = {this.state.user.name} userRank = {this.state.user.entries} />
              <ImageLinkForm
                onInputChange = {this.onInputChange}
                onButtonSubmit = {this.onButtonSubmit}/>
              <FaceRecognition box={box} imageUrl = {imageUrl} />
            </div>
            : (
              route === 'signin'
              ? <Signin loadUser= {this.loadUser} onRouteChange = {this.onRouteChange} />
              : <Register loadUser= {this.loadUser} onRouteChange = {this.onRouteChange} />
            )     
        }
      </div>
    );
  };
}

export default App;