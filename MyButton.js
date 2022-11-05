import * as React from "react";

//ex0.3
/*
class MyButton extends React.Component {
    render() {
      return <button>{this.props.children}</button>
    }
  }
*/

//ex1.2
/*
class MyButton extends React.Component {
    render() {
        const { disabled, text } = this.props;
        return <button disabled={disabled}>{text}</button>
    }
}
*/


//ex1.3

const MyButton = ({ disabled, text }) => (
    <button disabled={disabled}>{text}</button>
);

MyButton.defaultProps = {
    text: "My Button",
    disbaled: false,
};
//*/
export default MyButton;