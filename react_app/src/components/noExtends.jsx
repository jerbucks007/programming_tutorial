import React from "react";

function Label ({ value, component }) {
    return (
        <React.Fragment>
            <div>{value}{component(42)}</div>
        </React.Fragment>
    )
}

export default Label;