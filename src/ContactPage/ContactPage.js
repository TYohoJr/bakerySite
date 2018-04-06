import React from "react";
import "./ContactPage.css";
import { connect } from "react-redux";
import axios from 'axios';

const google = window.google;
var imageLoading = 'Loading map...';

class ContactPage extends React.Component {
    constructor() {
        super();
        this.initMap = this.initMap.bind(this);
        this.test = this.test.bind(this);
    }

    componentDidMount() {
        this.initMap()
    }

    test() {
        axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCH42g2Mfw3Q_s9lZapFZyt5yuXsMY3hes').then((result) => {
            console.log(result);
        })
    }

    initMap() {
        setTimeout(() => {
            imageLoading = '';
            var uluru = { lat: 41.729716, lng: -88.125040 };
            let map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: uluru
            });
            // eslint-disable-next-line
            let marker = new google.maps.Marker({
                position: uluru,
                map: map
            });
        }, 300);
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
                        <p>555-555-5555</p>
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
                <button onClick={this.test}>Click Me</button>
                <div id="map">
                    {imageLoading}
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(ContactPage);