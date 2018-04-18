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
                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/12.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/1.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/10.jpg")} alt="cupcakes/cookies" />
                    </div>
                    1 - Bouqet
                    2 - Tower
                    3 - Fancy Flower

                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/18.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/4.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/19.jpg")} alt="cupcakes/cookies" />
                    </div>
                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/7.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/16.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/13.jpg")} alt="cupcakes/cookies" />
                        
                    </div>
                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/6.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/5.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/11.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/21.jpg")} alt="cupcakes/cookies" />
                    </div>
                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/20.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/9.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/2.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/17.jpg")} alt="cupcakes/cookies" />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(CookiesCupcakes);