// // import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import Family from './components/Family';
// import family from './components/data/family.json';

// // react component called App
// function App() {
//   console.log("Family:", family);

//   const Familycomponents = [];
//   for (const Indiv of family) {
//     console.log("Family:", Indiv);
//     Familycomponents.push(
//       <Family name={Indiv.name} age={Indiv.age} member={Indiv.member} />
//     );
//   }



//   return (
//     <div>
//       <header></header>
//       <Header />
//       <h1>MY FAMILY</h1>
//       <p>Hello Beautiful</p>
//       <p>Family</p>
//       < Family age={40} name="Romina" member="NA" />
//       {Familycomponents}
//     </div>
//   );
// }



// export default App;



import './App.css';
import Header from './components/Header';
import KingsSolutions from './components/KingsSolutions'
import kings from './components/data/kings.json'

function App() {
  console.log("reyes:", KingsSolutions);

  const KingsSolutionscomponents = [];
  for (const reyes of kings) {
    console.log("KingsSolutions:", reyes);
    KingsSolutionscomponents.push(
      <KingsSolutions nm={reyes.nm} cty={reyes.cty} hse={reyes.hse} yrs={reyes.yrs} />
    );
  }

//   const Familycomponents = [];
//   for (const Indiv of family) {
//     console.log("Family:", Indiv);
//     Familycomponents.push(
//       <Family name={Indiv.name} age={Indiv.age} member={Indiv.member} />
//     );
//   }



  return (
    <div>
      <header></header>
      <Header />
      <h1>THE KINGS</h1>
      {KingsSolutionscomponents}
    </div>
  );
}



export default App;
