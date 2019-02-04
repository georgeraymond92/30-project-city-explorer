import React from 'react';

const ResultString = (props) => {
  return (<h2 className={ `query-placeholder ${props.display}` }>Here are the results for {props.location} {props.test}</h2>);
}

export default ResultString;