import React from "react";

class ImageComponent extends React.Component {
  render() {
    return <img src={this.props.image} alt={this.props.alt} />;
  }
}

export default ImageComponent;
