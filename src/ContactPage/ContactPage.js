import React from "react";
import "./ContactPage.css";
import { connect } from "react-redux";
import { Button } from "reactstrap";

const google = window.google;


class ContactPage extends React.Component {
    constructor() {
        super();
        this.initMap = this.initMap.bind(this);
        this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
        this.onStartChange = this.onStartChange.bind(this);
        this.state = {
            start: ""
        }
    }

    initMap() {
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 41.729716, lng: -88.125040 }
        });
        directionsDisplay.setMap(map);

        this.calculateAndDisplayRoute(directionsService, directionsDisplay);
    }

    calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
            origin: this.state.start,
            destination: { lat: 41.729716, lng: -88.125040 },
            travelMode: 'DRIVING'
        }, function (response, status) {
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
            <div>
                <div className="contact-info-container">
                    <div className="contact-sub-section">
                        <h4 className="contact-headers">Address:</h4>
                        <p>308 Warwick Drive<br />Naperville, IL 60565</p>
                    </div>
                    <div className="contact-sub-section">
                        <h4 className="contact-headers">Phone Number:</h4>
                        <p>630-204-0917</p>
                    </div>
                    <div className="contact-sub-section">
                        <h4 className="contact-headers">Email:</h4>
                        <p><a href="mailto:tyohojr@gmail.com">TYohoJr@Gmail.com</a></p>
                    </div>
                    <div>
                        <h4 className="contact-headers">Social Media:</h4>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img className="social-sprites" src={require("../images/twitter.jpg")} alt="twitter" /></a>
                        <a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><img className="social-sprites" src={require("../images/facebook.png")} alt="facebook" /></a>
                        <a href="www.instagram.com" target="_blank" rel="noopener noreferrer"><img className="social-sprites" src={require("../images/instagram.jpg")} alt="instagram" /></a>
                    </div>
                </div>
                <div className="map-form">
                    <input className="start-input" type="text" value={this.state.start} onChange={this.onStartChange} placeholder="Starting Location" />
                    <br />
                    <Button onClick={this.initMap}>Get Directions!</Button>
                </div>
                <div id="map">
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(ContactPage);