import React from 'react';
import PropTypes from 'prop-types';

function Weather({ temp, loc, sky }) {
  return (
    <div className='weather-display'>
      <p>
        {temp} in {loc} - {sky ? sky.description : null}
      </p>
    </div>
  );
}

Weather.propTypes = {
  temp: PropTypes.number,
  loc: PropTypes.string,
  weather: PropTypes.object,
};

export default Weather;
