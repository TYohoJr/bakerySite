import { combineReducers } from 'redux';
import LandingPage from './LandingPage/LandingPage';
import React from "react";

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
            additionalComments: ''
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
        default:
            return state = {
                ...state
            }
    }
}

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

const setPageReducer = (state, action) => {
    if (!state) {
        state = {
            currentPage: <LandingPage />
        }
    }
    switch (action.type) {
        case "setLandingPage":
            return state = {
                currentPage: action.currentPage
            }
        case "setPricingPage":
            return state = {
                currentPage: action.currentPage
            }
        case "setOrderPage":
            return state = {
                currentPage: action.currentPage
            }
        case "setExamplesPage":
            return state = {
                currentPage: action.currentPage
            }
        default:
            return {
                ...state
            }
    }
}

const cakeSizeReducer = (state, action) => {
    if (!state) {
        state = {
            totalCakeSize: ''
        }
    }
    switch (action.type) {
        case "totalCakeSize":
            return state = {
                totalCakeSize: action.totalCakeSize
            }
        case "resetTotal":
            return state = {
                totalCakeSize: ''
            }
        default:
            return {
                ...state
            }
    }
}

const pricingFormReducer = (state, action) => {
    if (!state) {
        state = {
            flavor: '',
            frosting: '',
            delivery: '',
            plates: ''
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
                flavor: state.flavor,
                frosting: action.frosting,
                delivery: state.delivery,
                plates: state.plates
            }
        case "setDelivery":
            return state = {
                flavor: state.flavor,
                frosting: state.frosting,
                delivery: action.delivery,
                plates: state.plates
            }
        case "setPlates":
            return state = {
                flavor: state.flavor,
                frosting: state.frosting,
                delivery: state.delivery,
                plates: action.plates
            }
        case "resetTotal":
            return state = {
                flavor: '',
                frosting: '',
                delivery: '',
                plates: ''
            }
        default:
            return {
                ...state
            }
    }
}

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
