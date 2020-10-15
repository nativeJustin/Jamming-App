import React from "react";
import "../Tracks/Tracks.css";

class Tracks extends React.Component {

    renderAction(){
        if(this.props.isRemoval) {
           return <button className="Track-Action">-</button>
        } else {
            return <button className="Track-Action">+</button>
        }
    }
  render() {
    return (
        <div className="Track">
        <div className="Track-information">
          <h3>track name</h3>
          <p>track artist will go here | track album </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Tracks;