import React from "react";
import "./ExamplesPage.css";
import { connect } from "react-redux";

class Examples extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Gallery</h1>
                </div>
                <div>
                    <div>
                        <img className="examples-img" src={require("../cake-images-top/jedi.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images-top/baby.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images-top/sand-castle.jpg")} alt="cake" />
                    </div>
                    <div>
                        <img className="examples-img" src={require("../cake-images-top/jesus.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images-top/bulldog.jpg")} alt="cake" />
                    </div>
                    <div>
                        <img className="examples-img" src={require("../cake-images-top/lego.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images-top/wedding1.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images-top/flowers.jpg")} alt="cake" />
                    </div>
                    <div>
                        <img className="examples-img" src={require("../cake-images/chocolate-frosting.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images/overflow-chocolate.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images/graduation-golf.jpg")} alt="cake" />
                    </div>
                    <div>
                        <img className="examples-img" src={require("../cake-images/superhero.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images/fairy-castle.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images/wedding2.jpg")} alt="cake" />
                    </div>
                    <div>
                        <img className="examples-img" src={require("../cake-images/pink-pig.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images/treasure-chest.jpg")} alt="cake" />
                        <img className="examples-img" src={require("../cake-images/pokemon.jpg")} alt="cake" />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(Examples);