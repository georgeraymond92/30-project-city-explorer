import React from 'react';
import Template from './index';
import util from 'util';

class Trails extends React.Component {

  render() {
    let lineItems = []
    this.props.data.forEach(function(item){
      lineItems.push(<Template data={item} />);
    })
    console.log(`✴️ ${util.inspect(this.props.data,{depth:10})}`)
    
    // for(let i = 0; i < this.props.data.length; i++){
      // lineItems.push(<Template data={this.props.data[1]} />);
      // lineItems.push(<Template data={this.props.data[2]} />);
      // lineItems.push(<Template data={this.props.data[3]} />);
      // lineItems.push(<Template data={this.props.data[4]} />);
      // lineItems.push(<Template data={this.props.data[5]} />);
      // lineItems.push(<Template data={this.props.data[6]} />);
      // lineItems.push(<Template data={this.props.data[7]} />);
      // lineItems.push(<Template data={this.props.data[8]} />);
      // lineItems.push(<Template data={this.props.data[9]} />);
      // lineItems.push(<Template data={this.props.data[10]} />);
      // lineItems.push(<Template data={this.props.data[1]} />);
    // }
    return(
    <section>
      <h3>Results from the Hiking Project API</h3>
      <ul class="trails-results">
        {lineItems}
      </ul>
    </section>
    );
  }
}

export default Trails;