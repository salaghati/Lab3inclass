/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
 //ex2.1
 /*
import * as React from "react";

export default function App() {
  const [name] = React.useState("Tu");
  const [age] = React.useState(21);

  return (
    <>
      <p>
        My name is {name}
      </p>
      <p>
        My age is {age}
      </p>
    </>
  );
}
//*/

//ex2.2
/*
import * as React from "react";
function App() {
  const [name, setName] = React.useState("Tu");
  const [age, setAge] = React.useState(21);

  return (
    <>
      <secion>
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </secion>
      <section>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>My age is {age}</p>
      </section>

    </>
  );
}
*/

//ex2.3
/*
import * as React from "react";
function App(){
  const [name, setName] = React.useState("Tu");
  const [age, setAge] = React.useState(21);

  return (
    <>
    <section>
    <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is {name}</p>
    </section>
    <section>
    <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>My age is {age}</p>
    </section>
    </>
  );
}
//*/


//export default App;