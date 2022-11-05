import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MySection from "./MySection";
import MyButton from "./MyButton";
import MyComponent from './MyComponent';
import MyList from './MyList';
import MyInput from './MyInput';
//ex0
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <p>
    Hello, <strong>JSX</strong>
  </p>
);
*/

//ex0.1
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <button />
    <code />
    <input />
    <label />
    <p />
    <pre />
    <select />
    <table />
    <ul />
  </div>
);
*/

//ex0.2
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href="item">Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
      <small>&coppy; 2021</small>
    </footer>
  </section>
);
*/

//ex0.3
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
);
*/

//ex0.4
/*
const array = ["First", "Second", "Third"];

const object = {
  first: 1,
  second: 2,
  third: 3,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <h1>
      Array
    </h1>
    <ul>
      {array.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>

    <h1>Object</h1>
    <ul>
      {Object.keys(object).map((i) => (
        <li key={i}>
          <strong>(i): </strong>
          {object[i]}
        </li>
      ))}
    </ul>
  </section>
);
*/

//ex1.0-1.1
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
*/

//ex1.2
/*
const root = ReactDOM.createRoot(document.getElementById('root'));

const appState = {
  text: "My Button",
  disabled: true,
  items: ["First", "Second", "Third"],
};

function render(props) {
  root.render(
    <main>
      <MyButton text={props.text} disabled={props.disabled} />
      <MyList items={props.items} />
    </main>
  );
}

render(appState);

setTimeout(() => {
  appState.disabled = false;
  appState.items.push("Fourth");

  render(appState);
}, 1000);
*/

//ex1.3
/*
const root = ReactDOM.createRoot(document.getElementById('root'));

function render({ second }) {
  root.render(
    <main>
      <MyButton />
      <MyButton text={second.text} disabled={second.disabled} />
    </main>
  );
}

render({
  second: {
    text: "Second Button",
    disabled: true,
  },
});
*/

//ex2.1-2.2-2.3
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//*/

//ex3
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyInput />);
*/

//ex4.1
/*
const element = (
  <div>
    Green is the prime color of the world
  </div>
);

ReactDOM.render(element, document.getElmentById('root'));
*/


reportWebVitals();