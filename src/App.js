import logo from './logo.svg';
import './App.css';
import Component from './parvaj/component'
// gsap
import {gsap, Power3} from 'gsap'
function App() {
// gsap
let tl = new gsap.timeline();
let ease = Power3.easeOut()
  return (
    <div className="App">
      <Component timeline={tl} ease={ease} />
    </div>
  );
}

export default App;
