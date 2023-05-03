import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import { Divider, Grid, Typography } from '@mui/material';
import '../../../../styles.scss';
import SearchBar from '../../components/SearchBar';
import './styles.scss';
import { useState } from 'react';

SideBar.propTypes = {

};


function SideBar({ onSearchChange, weatherData }) {
    console.log(weatherData?.weather)



    const getDayOfWeek = () => {
        const now = new Date(parseInt(Date.now()) + 1000)
        const time = now.getHours() + ":" + now.getMinutes();
        var weekday = new Array(7);
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        weekday[0] = "Sunday";

        return {
            weekDay: weekday[now.getDay()],
            time: time
        }
    }

    if (weatherData) {
        console.log(`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
        const sunsetTime = new Date(parseInt(weatherData.sys.sunset) + 1000)
        const sunriseTime = new Date(parseInt(weatherData.sys.sunrise) + 1000)
        var sunsetTimeString = sunsetTime.getHours() + ":" + sunsetTime.getMinutes() + " (UTC+7)"
        var sunriseTimeString = (sunriseTime.getHours() - 12) + ":" + sunriseTime.getMinutes() + " (UTC+7)"
        var temperature = weatherData.main.temp
        var weatherImgUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    }

    return (
        <Grid container >
            <SearchBar onSearchChange={onSearchChange} />
            {/* Weather status */}
            <Grid container justifyContent="center"
                alignItems="center"
                sx={{ padding: '24px', flexDirection: 'column' }}
            >
                <Grid>
                    <img className='sidebar__status-image' src={!!weatherImgUrl ? weatherImgUrl : ''} alt={''} />
                </Grid>
                <Grid>
                    <Typography variant="h1" component="h3">
                        {temperature}°C
                    </Typography>;
                    <Typography variant="h4" component="h4">
                        <span className='primary-text'>{getDayOfWeek().weekDay}, </span>
                        <span className='secondary-text'>{getDayOfWeek().time}</span>
                    </Typography>;
                </Grid>
                <Divider orientation='horizontal' sx={{
                    width: '90%',

                }}></Divider>

            </Grid>

            <Grid container justifyContent="center"
                alignItems="center"
                sx={{ padding: '0 0 24px' }}

            >
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CloudIcon />
                    <Typography variant="h5" component="h4" sx={{ margin: '8px 16px' }}>
                        {sunsetTimeString}
                    </Typography>
                </Grid>

                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <GrainIcon />
                    <Typography variant="h5" component="h4" sx={{ margin: '8px 16px' }}>
                        {sunriseTimeString}
                    </Typography >
                </Grid>
            </Grid>


        </Grid >
    );
}

export default SideBar;