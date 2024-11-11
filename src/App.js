import logo from './logo.svg';
import './App.css';
import { Header } from './Exercise1Compunents/Header';
import { H1 } from './Exercise1Compunents/H1';
import { List } from './Exercise1Compunents/List';
import { Footer } from './Exercise1Compunents/Footer';
import Navbar from './Ex2Components/Navbar';
import Main from './Ex2Components/Main'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div className='main'>
//     <Header/>
//     <H1/>
//     <List/>
//     <Footer/>
//   </div>
//   )
// }

function App(){
  return(
  <div className="container">
    <Navbar/>
    <Main/>
  </div>
  )
}

export default App;
