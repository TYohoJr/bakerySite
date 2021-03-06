import { combineReducers } from 'redux';
import LandingPage from './LandingPage/LandingPage';
import React from "react";

// Change the component that is the current tab being displayed
const activePageReducer = (state, action) => {
    if (!state) {
        state = {
            activePage: "Current active page",
        }
    }
    switch (action.type) {
        case "changeActivePage":
            return state = {
                activePage: action.activePage
            }
        default:
            return {
                ...state
            }
    }
}

// Details about the cake in the order form
const orderCakeReducer = (state, action) => {
    if (!state) {
        state = {
            layerOneSize: "4",
            layerTwoSize: '',
            layerThreeSize: '',
            layerFourSize: '',
            frostingFondant: '',
            flavor: '',
            delivery: '',
            plates: '',
            additionalComments: '',
            cookieStyle: '',
            cookieAmount: '',
            cupcakeStyle: '',
            cupcakeAmount: ''
        }
    }
    switch (action.type) {
        case "changeLayerOneSize":
            return state = {
                ...state,
                layerOneSize: action.layerOneSize
            }
        case "changeLayerTwoSize":
            return state = {
                ...state,
                layerTwoSize: action.layerTwoSize
            }
        case "changeLayerThreeSize":
            return state = {
                ...state,
                layerThreeSize: action.layerThreeSize
            }
        case "changeLayerFourSize":
            return state = {
                ...state,
                layerFourSize: action.layerFourSize
            }
        case "changeFrostingFondant":
            return state = {
                ...state,
                frostingFondant: action.frostingFondant
            }
        case "changeFlavor":
            return state = {
                ...state,
                flavor: action.flavor
            }
        case "changeDelivery":
            return state = {
                ...state,
                delivery: action.delivery
            }
        case "changePlates":
            return state = {
                ...state,
                plates: action.plates
            }
        case "changeText":
            return state = {
                ...state,
                additionalComments: action.text
            }
        case "changeCookieStyle":
            return state = {
                ...state,
                // If they change from cookie to cupcake or vice versa, change the other option to blank string
                cupcakeStyle: '',
                cupcakeAmount: '',
                cookieStyle: action.cookieStyle
            }
        case "changeCookieAmount":
            return state = {
                ...state,
                cupcakeStyle: '',
                cupcakeAmount: '',
                cookieAmount: action.cookieAmount
            }
        case "changeCupcakeStyle":
            return state = {
                ...state,
                cookieStyle: '',
                cookieAmount: '',
                cupcakeStyle: action.cupcakeStyle
            }
        case "changeCupcakeAmount":
            return state = {
                ...state,
                cookieStyle: '',
                cookieAmount: '',
                cupcakeAmount: action.cupcakeAmount
            }
        case "changeNoSide":
            return state = {
                ...state,
                cookieStyle: '',
                cookieAmount: '',
                cupcakeStyle: '',
                cupcakeAmount: ''
            }
        default:
            return state = {
                ...state
            }
    }
}

// Details about the customer in the order form
const orderFormReducer = (state, action) => {
    if (!state) {
        state = {
            username: "",
            addressCity: '',
            addressState: '',
            addressStreet: '',
            addressZip: '',
            email: '',
            number: '',
            dateNeeded: '',
            contact: ''
        }
    }
    switch (action.type) {
        case "changeUsername":
            return state = {
                ...state,
                username: action.username,
            }
        case "changeAddressStreet":
            return state = {
                ...state,
                addressStreet: action.addressStreet
            }
        case "changeAddressCity":
            return state = {
                ...state,
                addressCity: action.addressCity
            }
        case "changeAddressState":
            return state = {
                ...state,
                addressState: action.addressState
            }
        case "changeAddressZip":
            return state = {
                ...state,
                addressZip: action.addressZip
            }
        case "changeEmail":
            return state = {
                ...state,
                email: action.email
            }
        case "changeNumber":
            return state = {
                ...state,
                number: action.number
            }
        case "changeDateNeeded":
            return state = {
                ...state,
                dateNeeded: action.dateNeeded
            }
        case "changeContact":
            return state = {
                ...state,
                contact: action.contact
            }
        default:
            return {
                ...state
            }
    }
}

// Info about the sizes of layers in the servings modal on the pricing page
const layerSizeReducer = (state, action) => {
    if (!state) {
        state = {
            firstLayerSize: 4,
            secondLayerSize: null,
            thirdLayerSize: null,
            fourthLayerSize: null,
        }
    }
    switch (action.type) {
        case "changeFirstLayerSize":
            return state = {
                ...state,
                firstLayerSize: action.firstLayerSize,
            }
        case "changeSecondLayerSize":
            return state = {
                ...state,
                secondLayerSize: action.secondLayerSize,
            }
        case "changeThirdLayerSize":
            return state = {
                ...state,
                thirdLayerSize: action.thirdLayerSize,
            }
        case "changeFourthLayerSize":
            return state = {
                ...state,
                fourthLayerSize: action.fourthLayerSize,
            }
        case "resetTotal":
            return state = {
                firstLayerSize: 4,
                secondLayerSize: null,
                thirdLayerSize: null,
                fourthLayerSize: null,
            }
        default:
            return {
                ...state
            }
    }
}

// Navbar open/close toggler
const navbarReducer = (state, action) => {
    if (!state) {
        state = {
            isOpen: false
        }
    }
    switch (action.type) {
        case "navbarToggle":
            return state = {
                isOpen: action.isOpen
            }
        default:
            return {
                ...state
            }
    }
}

// Set the state of the component currently being displayed in the CurrentPage component
const setPageReducer = (state, action) => {
    if (!state) {
        state = {
            currentPage: <LandingPage />
        }
    }
    switch (action.type) {
        case "setPage":
            return state = {
                currentPage: action.currentPage
            }
        default:
            return {
                ...state
            }
    }
}

// State of the text inside the inout box for the total cake size on the pricing page
const cakeSizeReducer = (state, action) => {
    if (!state) {
        state = {
            totalCakeSize: '',
            totalCakeHeight: 'Please use calculator above'
        }
    }
    switch (action.type) {
        case "totalCakeSize":
            return state = {
                totalCakeSize: action.totalCakeSize,
                totalCakeHeight: action.totalCakeHeight
            }
        case "resetTotal":
            return state = {
                totalCakeSize: '',
                totalCakeHeight: 'Please use calculator above'
            }
        default:
            return {
                ...state
            }
    }
}

// State of all the info in the pricing form
const pricingFormReducer = (state, action) => {
    if (!state) {
        state = {
            flavor: '',
            frosting: '',
            delivery: '',
            plates: '',
            cookieStyle: '',
            cookieAmount: '',
            cupcakeStyle: '',
            cupcakeAmount: ''
        }
    }
    switch (action.type) {
        case "setFlavor":
            return state = {
                flavor: action.flavor,
                frosting: state.frosting,
                delivery: state.delivery,
                plates: state.plates
            }
        case "setFrosting":
            return state = {
                ...state,
                frosting: action.frosting,
            }
        case "setDelivery":
            return state = {
                ...state,
                delivery: action.delivery,
            }
        case "setPlates":
            return state = {
                ...state,
                plates: action.plates
            }
        case "setCookieStyle":
            return state = {
                ...state,
                cupcakeStyle: '',
                cupcakeAmount: '',
                cookieStyle: action.cookieStyle
            }
        case "setCookieAmount":
            return state = {
                ...state,
                cupcakeStyle: '',
                cupcakeAmount: '',
                cookieAmount: action.cookieAmount
            }
        case "setCupcakeStyle":
            return state = {
                ...state,
                cookieStyle: '',
                cookieAmount: '',
                cupcakeStyle: action.cupcakeStyle
            }
        case "setCupcakeAmount":
            return state = {
                ...state,
                cookieStyle: '',
                cookieAmount: '',
                cupcakeAmount: action.cupcakeAmount
            }
        case "setNoSide":
            return state = {
                ...state,
                cookieStyle: '',
                cookieAmount: '',
                cupcakeStyle: '',
                cupcakeAmount: '',
            }
        case "resetTotal":
            return state = {
                flavor: '',
                frosting: '',
                delivery: '',
                plates: '',
                cookieStyle: '',
                cookieAmount: '',
                cupcakeStyle: '',
                CupcakeAmount: ''
            }
        default:
            return {
                ...state
            }
    }
}

// State of the result of the total estimate from the pricing form
const calculateEstimateReducer = (state, action) => {
    if (!state) {
        state = {
            estimateTotal: null
        }
    }
    switch (action.type) {
        case "calculateEstimateTotal":
            return state = {
                estimateTotal: action.estimateTotal
            }
        case "resetTotal":
            return state = {
                estimateTotal: null
            }
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({
    activePageReducer: activePageReducer,
    orderFormReducer: orderFormReducer,
    navbarReducer: navbarReducer,
    setPageReducer: setPageReducer,
    layerSizeReducer: layerSizeReducer,
    cakeSizeReducer: cakeSizeReducer,
    pricingFormReducer: pricingFormReducer,
    calculateEstimateReducer: calculateEstimateReducer,
    orderCakeReducer: orderCakeReducer
});
