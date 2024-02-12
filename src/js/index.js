//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let digito1 = 0;
let digito2 = 0;
let digito3 = 0;
let digito4 = 0;
let digito5 = 0;
let digito6 = 0;

setInterval(function(){
    digito1++;
    if (digito1 == 9) {
        digito1 = 0
        digito2++;
        if (digito2 == 9) {
            digito2 = 0
            digito3++;
            if (digito3 == 9) {
                digito3 = 0
                digito4++;
                if (digito4 == 9) {
                    digito4 = 0
                    digito5++;
                    if (digito5 == 9) {
                        digito5 = 0
                        digito6++;
                        if (digito6 == 9) {
                            digito6 = 0
                        }
                    }
                }
            }
        }
    }



    ReactDOM.render(<Home digito1={digito1} digito2={digito2} digito3={digito3} digito4={digito4} digito5={digito5} digito6={digito6}/>, document.querySelector("#app"));
},1000)