#The Cake Lady

This project is a custom cakes website for Laura Yoho. Built from the ground up using:

* React

* Redux

* Node

* Express

* PostgreSQL

* Google Maps API

* PayPal API





###The site has the following features:


####Price Estimator

A form with various options for a custom cake, used to estimate a final price. Features a servings modal tool which after filled out will calculate the overall size of the cake used in the formula (as well as let the customer know the overall height of the cake)



####Order Form/PayPal

Complete dual forms used to gather info on both the customer and their cake order. After verifying that the email they used isn't already linked to a current order, it has the customer fill out payment info to secure a deposit that is needed to submit an order. It then send that info through the PayPal API. Upon success, the Express server then saves all the order info into a postges DB.



####Order Lookup

A customer can enter their email into the order lookup tool and receive back the info that is saved in the DB associated with their order. If no order exists with that email the modal informs the customer.



####Directions

In order to let the customer know how to get to the business, or also to help them decide on pickup or delivery, the site has a directions tab. The user can enter their current/starting location and recieve a complete list of directions, as well as total distance and estimated travel time. This is done through the Google Maps API.