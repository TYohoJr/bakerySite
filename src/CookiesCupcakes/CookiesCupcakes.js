import React from "react";
import "./CookiesCupcakes.css";
import { connect } from "react-redux";

class CookiesCupcakes extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Gallery</h1>
                </div>
                <div>
                    <img className="examples-img" src={require("../cake-images/cupcakes1.jpg")} alt="cake" />
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(CookiesCupcakes);