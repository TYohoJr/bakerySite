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
                    <p><span className="cc-text-row-1">1 - Bouqet</span><span className="cc-text-row-1">2 - Event</span><span className="cc-text-row-1">3 - Fancy Flower</span></p>
                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/18.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/4.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/19.jpg")} alt="cupcakes/cookies" />
                    </div>
                    <p><span className="cc-text-row-1">4 - Cupcake</span><span className="cc-text-row-1">5 - Smileys</span><span className="cc-text-row-1">6 - Carrots</span></p>
                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/7.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/16.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/13.jpg")} alt="cupcakes/cookies" />
                    </div>
                    <p><span className="cc-text-row-1">7 - Variety</span><span className="cc-text-row-1">8 - Garden</span><span className="cc-text-row-1">9 - Variety</span></p>
                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/6.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/5.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/11.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/21.jpg")} alt="cupcakes/cookies" />
                    </div>
                    <p><span className="cc-text-row-1">10 - Christmas</span><span className="cc-text-row-1">11 - Snowmen</span><span className="cc-text-row-1">12 - Christmas 2</span><span className="cc-text-row-1">13 - Hearts</span></p>
                    <div className="alt-img-div">
                        <img className="alt-img" src={require("../alt-images/20.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/9.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/2.jpg")} alt="cupcakes/cookies" />
                        <img className="alt-img" src={require("../alt-images/17.jpg")} alt="cupcakes/cookies" />
                    </div>
                    <p><span className="cc-text-row-1">14 - Frosting</span><span className="cc-text-row-1">15 - Oreo</span><span className="cc-text-row-1">16 - Graduation</span><span className="cc-text-row-1">17 - Swirl</span></p>
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(CookiesCupcakes);