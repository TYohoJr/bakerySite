import React from "react";
import "./ContactPage.css";
import { connect } from "react-redux";

const google = window.google;

class ContactPage extends React.Component {
    constructor(){
        super();
        this.initMap = this.initMap.bind(this);
    }

    componentDidMount() {
       this.initMap()
    }

    initMap(){
        setTimeout(() => {
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
        }, 100);
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
                <div id="map">
                </div>
            </div>
        )
    }
}

export default connect((state) => (state))(ContactPage);