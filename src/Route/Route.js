import React from "react";
import "./Route.css";
import axios from "axios";
import { Button } from "reactstrap";

export default class Route extends React.Component {
    constructor() {
        super();
        this.getRoute = this.getRoute.bind(this);
    }

    getRoute() {
        axios.post("https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyCH42g2Mfw3Q_s9lZapFZyt5yuXsMY3hes").then((result)=>{
            console.log(result);
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.getRoute}>Get Route</Button>
            </div>
        )
    }
}
