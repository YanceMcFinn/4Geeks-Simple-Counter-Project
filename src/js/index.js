//import react into the bundle
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from '@fortawesome/free-regular-svg-icons';

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
function SimpleCounter(props){
    return (<><div className="bigCounter">
        <div className="clock">
        <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="six">{props.digitSix % 10}</div>
        <div className="five">{props.digitFive % 10}</div>
        <div className="four">{props.digitFour % 10}</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>
    </div>
    <div className="row text-center">
            <div className="row my-2 mx-auto d-flex justify-content-center">
                <div className="col-10">
                    <input id="alertNumber" type="number" className="rounded"></input>
                <button className="btn btn-primary mx-1 my-2" id="alertNumberBtn" onClick={inputAlert}>Alert when this number is reached</button>
                <div className="col-9 mx-auto">
                {/* <button onClick= {stopCount} className="btn btn-warning">Stop</button>
                <button className="btn btn-primary" onClick={startCount} >Resume</button> */}
                <button className="btn btn-danger my-3" onClick={reset}>Reset</button>          
            </div>
                </div>
            </div>
    </div></>
   )
}

SimpleCounter.PropTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number,


}

let counter = 1;
var startCount = setInterval (function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = counter;
    
counter++;
window.onload = startCount
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app")
    );
}, 1000);

const stopCount = () => {
    clearInterval(startCount)
}

const reset = () => {
    counter = 0;
}

const alertCounter = () => {
    counter == alertNumber ? alert("requested number has been reached") : ""}
let alertNumber = 99999999999
const inputAlert = () => {
    alertNumber = document.getElementById("alertNumber").value
    setInterval(alertCounter, 1500);
}
//render your react application
ReactDOM.render(
    <SimpleCounter digitOne="0" digitTwo="0" digitThree="0" digitFour="0" digitFive="0" digitSix="0" />, document.querySelector("#app")
);