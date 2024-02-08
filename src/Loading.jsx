import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
    return (
        <div className="loading-container">
            <Spinner
                animation="border"
                role="status"
            >
            </Spinner>
            <h2>Loading ... </h2>
        </div>
    );
}

export default Loading;