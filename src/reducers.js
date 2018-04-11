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

const usernameReducer = (state, action) => {
    if (!state) {
        state = {
            username: ""
        }
    }
    switch (action.type) {
        case "changeUsername":
            return state = {
                username: action.username
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
                firstLayerSize: action.firstLayerSize,
                secondLayerSize: state.secondLayerSize,
                thirdLayerSize: state.thirdLayerSize,
                fourthLayerSize: state.fourthLayerSize,
            }
        case "changeSecondLayerSize":
            return state = {
                firstLayerSize: state.firstLayerSize,
                secondLayerSize: action.secondLayerSize,
                thirdLayerSize: state.thirdLayerSize,
                fourthLayerSize: state.fourthLayerSize,
            }
        case "changeThirdLayerSize":
            return state = {
                firstLayerSize: state.firstLayerSize,
                secondLayerSize: state.secondLayerSize,
                thirdLayerSize: action.thirdLayerSize,
                fourthLayerSize: state.fourthLayerSize,
            }
        case "changeFourthLayerSize":
            return state = {
                firstLayerSize: state.firstLayerSize,
                secondLayerSize: state.secondLayerSize,
                thirdLayerSize: state.thirdLayerSize,
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
            cakeSize: null,
            flavor: '',
            frosting: '',
            delivery: '',
            plates: ''
        }
    }
    switch (action.type) {
        case "setCakeSize":
            return state = {
                cakeSize: action.cakeSize,
                flavor: state.flavor,
                frosting: state.frosting,
                delivery: state.delivery,
                plates: state.plates
            }
        case "setFlavor":
            return state = {
                cakeSize: state.cakeSize,
                flavor: action.flavor,
                frosting: state.frosting,
                delivery: state.delivery,
                plates: state.plates
            }
        case "setFrosting":
            return state = {
                cakeSize: state.cakeSize,
                flavor: state.flavor,
                frosting: action.frosting,
                delivery: state.delivery,
                plates: state.plates
            }
        case "setDelivery":
            return state = {
                cakeSize: state.cakeSize,
                flavor: state.flavor,
                frosting: state.frosting,
                delivery: action.delivery,
                plates: state.plates
            }
        case "setPlates":
            return state = {
                cakeSize: state.cakeSize,
                flavor: state.flavor,
                frosting: state.frosting,
                delivery: state.delivery,
                plates: action.plates
            }
        case "resetTotal":
            return state = {
                cakeSize: null,
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
    usernameReducer: usernameReducer,
    navbarReducer: navbarReducer,
    setPageReducer: setPageReducer,
    layerSizeReducer: layerSizeReducer,
    cakeSizeReducer: cakeSizeReducer,
    pricingFormReducer: pricingFormReducer,
    calculateEstimateReducer: calculateEstimateReducer
});
