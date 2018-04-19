import React from "react";
import "./Directions.css";
import { connect } from "react-redux";
import { Button } from "reactstrap";

// Make sure google is defined
const google = window.google;

class Directions extends React.Component {
    constructor() {
        super();
        this.initMap = this.initMap.bind(this);
        this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
        this.onStartChange = this.onStartChange.bind(this);
        this.state = {
            start: ""
        }
    }

    componentDidMount() {
        var myLatLng = { lat: 41.729716, lng: -88.125040 }
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: myLatLng
        });
        // Google maps api uses the marker simply by delcaring it. React doesn't like that...
        // eslint-disable-next-line
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'The Cake Lady'
        });
    }

    initMap() {
        document.getElementById("panel").innerHTML = '';
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer({
            panel: document.getElementById("panel")
        });
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 41.729716, lng: -88.125040 }
        });
        directionsDisplay.setMap(map);
        this.calculateAndDisplayRoute(directionsService, directionsDisplay);

    }

    calculateAndDisplayRoute(directionsService, directionsDisplay) {
        // Run route functions
        directionsService.route({
            origin: this.state.start,
            destination: { lat: 41.729716, lng: -88.125040 },
            travelMode: 'DRIVING'
        }, function (response, status) {
            // Make sure the service didn't fail
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    onStartChange(e) {
        this.setState({
            start: e.target.value
        })
    }

    render() {
        return (
            <div id="directions-div">
                <div id="map-form-and-map">
                    <div className="map-form">
                        <h3>Get Directions!</h3>
                        <input className="start-input" type="text" value={this.state.start} onChange={this.onStartChange} placeholder="Starting Location" />
                        <br />
                        <Button className="submit-btn" onClick={this.initMap}>Get Directions!</Button>
                    </div>
                    <div id="map">
                    </div>
                </div>
                <div id="panel" />
            </div>
        )
    }
}

export default connect((state) => (state))(Directions);