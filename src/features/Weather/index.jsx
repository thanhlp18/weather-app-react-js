import { React, useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './pages/SideBar';
import Content from './pages/Content';
import { Grid } from '@mui/material';
import styled, { css } from 'styled-components'
import { handleWeatherApi } from 'api/weatherApi';
import './styles.scss'


WeatherFeature.propTypes = {

};


const Box = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
    overflow: hidden;
`

function WeatherFeature(props) {
    var [lat, lon] = [10.1167, 105.5]
    const [weatherData, setCurrentWeatherData] = useState(null)
    const [isFirstTime, setIsFirstTime] = useState(true)
    const [currentWeather, setCurrentWeather] = useState(null)


    if (isFirstTime) handleWeatherApi(lat, lon).then((res) => {
        setIsFirstTime(false)
        setCurrentWeatherData(res.weatherData)
    })

    const onSearchChange = (searchData) => {
        [lat, lon] = searchData.values.split(" ")
        handleWeatherApi(lat, lon).then((res) => {
            setCurrentWeatherData(res.weatherData)
        })
    }




    return (
        <Box $secondary className='box'>
            <Grid container spacing={0}>
                <Grid item md={4} >
                    <SideBar weatherData={weatherData} onSearchChange={onSearchChange} />
                </Grid>
                <Grid item md={8} >
                    <Content weatherData={weatherData} />
                </Grid>
            </Grid >
        </Box>
    );
}

export default WeatherFeature;