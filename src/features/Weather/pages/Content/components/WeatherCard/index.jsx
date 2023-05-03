import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';


export default function WeatherCard(props) {
    const weatherStatus = {
        status: 'Cloudy',
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png'
    }

    return (
        <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                <Grid container justifyContent="center"
                    alignItems="center"
                    flexDirection='row'
                >
                    <Grid>
                        <Typography variant="h7" component="h6">
                            {props.day}
                        </Typography>
                        <Grid >
                            <img src={weatherStatus.imgUrl} alt={weatherStatus.status} width={'40px'} />
                        </Grid>
                        <Typography variant="h7" component="h6" mt={2}>
                            <span className='primary-text'>Monday, </span>
                            <span className='secondary-text'>16:00</span>
                        </Typography>
                    </Grid>
                    <Divider orientation='horizontal' ></Divider>

                </Grid>
            </CardContent>
        </Card >
    );
}