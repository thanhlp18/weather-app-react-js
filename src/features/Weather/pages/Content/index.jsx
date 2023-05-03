import { Grid, createTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import './styles.scss';

import randomQuoteApi from 'api/randomQuote'
import { useEffect, useState } from 'react';
const dayOfWeel = [0, 1, 2, 3, 4, 5, 6]


function Content({ weatherData }) {
    const [quote, setQuote] = useState({})
    const theme = createTheme();
    if (weatherData) {
        var humidity = weatherData.main.humidity
        var pressure = weatherData.main.pressure
        var windSpeed = weatherData.wind.speed
    }

    useEffect(() => {
        randomQuoteApi().then((res) => {
            setQuote({
                text: res.quote.text,
                author: res.quote.author

            })
        })
    }, [])


    return (
        <Grid className='content' container sx={{ paddingRight: '24px', paddingLeft: '24px', alignContent: 'flex-start' }}>

            <Header />


            {/* Today's hightlight */}
            <Grid container mt={theme.spacing(3)}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        margin: '0 0 16px'
                    }}
                >
                    Today's hightlight
                </Typography>

                <Grid container spacing={theme.spacing(3)} mb='24px'>
                    <Grid container item sm={12} spacing={theme.spacing(3)}>
                        <Grid item sm={4}>
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%', minHeight: '250px' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                Humidity
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src="https://img.icons8.com/fluency-systems-regular/96/null/humidity.png" width={'80%'} />
                                            </Grid>
                                            <Typography variant="h4" component="h6">
                                                {!!humidity ? humidity : ""}%
                                            </Typography>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                        <Grid item sm={4}>
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%', minHeight: '250px' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                Pressure
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src="https://img.icons8.com/fluency-systems-regular/96/null/barometer-gauge.png" width={'80%'} />
                                            </Grid>
                                            <Typography variant="h4" component="h6">
                                                {!!pressure ? pressure : ""} hPa
                                            </Typography>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                        <Grid item sm={4} sx={{ minHeight: '250px' }}>
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%', minHeight: '250px' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                Wind speed
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src="https://img.icons8.com/sf-regular-filled/48/null/wind.png" width="80%" />                                            </Grid>
                                            <Typography variant="h4" component="h6">
                                                {!!windSpeed ? windSpeed : ""} m/s
                                            </Typography>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                    </Grid>


                </Grid>

                <Grid sx={{ width: '100%', height: '100%' }}>
                    <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '2rem', width: '100%' }}>
                        <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                            <Typography variant="h6" component="h6" sx={{ padding: '16px' }}>
                                {quote?.text}
                            </Typography>
                        </CardContent>
                    </Card >
                </Grid>
            </Grid>


        </Grid >
    );
}

export default Content;