import * as React from "react";

class MyInput extends React.Component {
    onChange() {
        console.log("changed");
    }

    onBlur() {
        console.log("blured");
    }

    render() {
        return <input onChange={this.onChange} on Blur={this.onBlur} />;
    }
}

export default MyInput;