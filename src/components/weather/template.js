import React from 'react';

// class Template extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     time: '',
//   //     forcast: ''
//   //   }
//   // }
//   render(){
//     return (
//       <li>
//         The forecast for { props.data.time } is: { props.data.forecast }
//       </li>
//     );
//   }
// }

const Template = (props) => (
  <li>
    The forecast for { this.props.data.time } is: { this.props.data.forecast }
  </li>
);


export default Template;

// { id: 5827,
//   forecast: 'Snow (< 1 in.) starting in the afternoon, continuing until evening.',
//   time: 'Sun Feb 03 2019',
//   created_at: '1549230168298',
//   location_id: 1 },

{/* <Weather data={res.body} /> */}
