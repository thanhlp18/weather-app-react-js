import { Grid, createTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import './styles.scss';


const dayOfWeel = [0, 1, 2, 3, 4, 5, 6]

function Content(props) {
    const theme = createTheme();

    return (
        <Grid className='content' container sx={{ paddingRight: '24px', paddingLeft: '24px', alignContent: 'flex-start' }}>
            <Header />
            {/* Week's weather list */}
            <Grid flexDirection='row' sx={{
                display: 'flex',
                flexWrap: 'no-wrap',
                gap: theme.spacing(2),
                overflowX: 'scroll',
                width: '100%',
                justifyContent: 'space-between'
            }}>

                {dayOfWeel.map((day) => {
                    console.log(day);
                    return (
                        <Grid key={day} item sx={{
                            minWidth: '96px'
                        }}  >
                            <WeatherCard day={day} sx={{ flexGrow: '1' }} />
                        </Grid>
                    )

                })

                }
            </Grid>

            {/* Today's hightlight */}
            <Grid container mt={theme.spacing(5)}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
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
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                UV Index
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='' width={'80%'} padding={'16px'} />
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                        <Grid item sm={4}>
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                Wind Status
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='' width={'80%'} padding={'16px'} />
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                        <Grid item sm={4}>
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                UV Index
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='' width={'80%'} padding={'16px'} />
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                    </Grid>
                    <Grid container item sm={12} spacing={theme.spacing(3)}>
                        <Grid item sm={4}>
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                UV Index
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='' width={'80%'} padding={'16px'} />
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                        <Grid item sm={4}>
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                Wind Status
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='' width={'80%'} padding={'16px'} />
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                        <Grid item sm={4}>
                            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;', borderRadius: '10%' }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 8px' }}>
                                    <Grid container
                                        flexDirection='row'
                                        justifyContent='center'
                                    >
                                        <Grid>
                                            <Typography variant="h6" component="h6">
                                                UV Index
                                            </Typography>
                                            <Grid sx={{ margin: '24px' }}>
                                                <img src='https://cdn-icons-png.flaticon.com/512/1163/1163661.png' alt='' width={'80%'} padding={'16px'} />
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card >
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>


        </Grid >
    );
}

export default Content;