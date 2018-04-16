import React from "react";
import PaypalExpressBtn from 'react-paypal-express-checkout';
import axios from 'axios';
import { connect } from 'react-redux';

class PayPal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
            console.log("The payment was successful!!", payment);
            axios.post("/createOrder", { order: this.props.orderCakeReducer, info: this.props.orderFormReducer }).then((result) => {
                alert(result.data.message);
            }).catch((error) => {
                console.log(error)
            })
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup
            console.log('The payment was cancelled!', data);
            alert("Paypal transaction was cancelled");
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            alert("There was an error loading PayPal");
        }

        let env = 'production'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state  
        let total = 20; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout

        const client = {
            sandbox: 'AVBPOvA6ZCJ_fm8f7b4vFj1yHzU5OxacQBv3wG2ga2IzIuW0WSfx54UH-S2dOnjNHwRBuBjqR5P4lpUN',
            production: 'AcVg1-MRDoREcvwU5gA5_bJhqEK8ybezDG9MBtKfuA3ocrNDP3wnZLCwn4n3MWSB7ZoYzUxR-5WFTtY0',
        }
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/		

        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}

export default connect((state) => (state))(PayPal);


/*
Payment object on success

address:
    city:"Naperville"
    country_code:"US"
    line1:"308 Warwick Drive"
    postal_code:"60565"
    recipient_name:"Thomas Yoho"
    state:"IL"
    __proto__:Object
cancelled:false
email:"TYohoJr@Gmail.com"
paid:true
payerID:"U9PW4MWGUPKHU"
paymentID:"PAY-0BU50412EK604814CLLF3HHY"
paymentToken:"EC-92D5274254241590A"
returnUrl:"https://www.sandbox.paypal.com/?paymentId=PAY-0BU50412EK604814CLLF3HHY&token=EC-92D5274254241590A&PayerID=U9PW4MWGUPKHU"
__proto__:sObject
*/