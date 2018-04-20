import React from "react";
import "./Header.css";
import OrderLookup from "../OrderLookup/OrderLookup";

export default class Header extends React.Component {
    render() {
        return (
            <div id="header-div">
                <div id="header-title" className="header-parts">
                    <div>
                        <img id="header-logo" src={require("../images/logo.png")} alt="cake slice" />
                        <img id="header-cake-slice" src={require("../images/cake-slice.png")} alt="cake slice" />
                    </div>
                    {/* <h1 id="header-header">The Cake Lady<img id="header-logo" src={require("../images/logo.png")} alt="cake slice"/><img id="header-cake-slice" src={require("../images/cake-slice.png")} alt="cake slice"/></h1> */}
                    <div id="header-imgs-div">
                        <img className="header-img" src={require("../cake-images-top/baby.jpg")} alt="laura yoho" />
                        <img className="header-img" src={require("../cake-images-top/wedding1.jpg")} alt="laura yoho" />
                        <img className="header-img" src={require("../cake-images-top/bulldog.jpg")} alt="laura yoho" />
                        <img className="header-img" src={require("../alt-images/12.jpg")} alt="cupcakes/cookies" />
                        <img className="header-img" src={require("../alt-images/4.jpg")} alt="cupcakes/cookies" />
                    </div>
                </div>
                <div id="header-all-info">
                    <div id="header-address" className="header-parts">
                        <p>Address:</p>
                        <p>308 Warwick Drive</p>
                        <p>Naperville, IL 60565</p>
                    </div>
                    <div id="header-hours" className="header-parts">
                        <p id="header-hours-title" className="header-hours-lines">Hours:</p>
                        <p className="header-hours-lines">Tu-Fr: 9am - 6pm</p>
                        <p className="header-hours-lines">Sat: 9am - 3pm</p>
                        <p className="header-hours-lines">Su & Mon: - Closed</p>
                    </div>
                </div>
                <OrderLookup />
            </div>
        )
    }
}
