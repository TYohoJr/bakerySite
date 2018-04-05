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
        case "setAboutPage":
            return state = {
                currentPage: action.currentPage
            }
        case "setContactPage":
            return state = {
                currentPage: action.currentPage
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
    setPageReducer: setPageReducer
});
