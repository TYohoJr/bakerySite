import React from "react";
import "./CurrentPage.css";
import { connect } from "react-redux";

class CurrentPage extends React.Component {
    render() {
        return (
            <div>
                {/* Simply grab the state of the current page from Redux */}
                {this.props.setPageReducer.currentPage}
            </div>
        )
    }
}

export default connect((state) => (state))(CurrentPage);