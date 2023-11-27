// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Pets from './components/Pets';
// react component called App
function App() {
  return (
    <div>
      <header></header>
      <Header/>
      <h1>My Cats</h1>
      <p>Paco n Mimi</p>
      <h3> Paco Pedacitos</h3>
      <img src='blob:https://photos.onedrive.com/d86d9735-c776-4c7c-8670-8dc2cffa17f1' alt='Paco Pedactios'></img>
      <Pets name="Paco" age="3" raza="Russian blue black"/>

      <Pets name="Jacinta Mimi" age="17" raza="Siamese"/>
      <Pets name="" age="" raza=""/>
      <Pets />
    </div>
  );
}

export default App;