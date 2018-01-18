import React, { Component } from 'react';
import './App.css';
import Films from "./Component/Compounent.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Films name="Телехранитель киллера" img="../the_hitman_bodyguards.jpeg" year="2017" link="http://hdrezka.ag/films/action/24675-telohranitel-killera-2017.html" post="Смотреть" />
        <Films name="Лига Справидливости" year="2017" link="https://kinogb.club/7168/" post="Смотреть" />
        <Films name="Стражи галактики 2" year="2017" link="http://kinokrad.co/312798-strazhi-galaktiki-chast-2-2017.html" post="Смотреть" />
      </div>
    );
  }
}

export default App;