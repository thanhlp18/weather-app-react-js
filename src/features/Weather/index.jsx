import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './pages/SideBar';
import Content from './pages/Content';

WeatherFeature.propTypes = {

};

function WeatherFeature(props) {
    return (
        <div>
            <SideBar />
            <Content />
        </div>
    );
}

export default WeatherFeature;