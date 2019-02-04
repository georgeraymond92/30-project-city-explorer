import React from 'react';


class Map extends React.Component{
  render(){

    return (
      <img id="map" className={this.props.display} src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`} alt="Map of search query" />
    )
  }
}


export default Map;