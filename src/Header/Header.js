import React from "react";
import "./Header.css";

export default class Header extends React.Component {
    render() {
        return (
            <div id="header-div">
                <div id="header-title" className="header-parts">
                    <h1>The Cake Lady</h1>
                </div>
                <div id="header-address" className="header-parts">
                    <p>Address:</p>
                    <p>308 Warwick Drive</p>
                    <p>Naperville, IL 60565</p>
                </div>
                <div id="header-hours" className="header-parts">
                    <p id="header-hours-title" className="header-hours-lines">Hours:</p>
                    <p className="header-hours-lines">Tu-Fr 9am - 6pm</p>
                    <p className="header-hours-lines">Sat 9am - 3pm</p>
                    <p className="header-hours-lines">Su & Mon - Closed</p>
                </div>
            </div>
        )
    }
}
