import React, { Component } from 'react';
import IdCard from "./components/IdCard.js"
import './App.css';
import Greetings from "./components/Greetings.js";
import Random from "./components/Random.js";
import BoxColor from "./components/BoxColor.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard 
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard 
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/> 
        <h1 className="title">Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1 className="title">Random</h1>
        <Random/>

        <h1 className="title">BoxColor</h1>
        <BoxColor />
        <BoxColor />
      </div>
    );
  }
}

export default App;
