import { Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../../../../styles.scss';
import SearchBar from '../../components/SearchBar';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import './styles.scss';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

SideBar.propTypes = {

};


function SideBar() {
    const weatherStatus = {
        status: 'Cloudy',
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png'
    }

    return (
        <Grid container >
            <SearchBar />
            {/* Weather status */}
            <Grid container justifyContent="center"
                alignItems="center"
                sx={{ padding: '24px' }}
            >
                <Grid>
                    <img className='sidebar__status-image' src={weatherStatus.imgUrl} alt={weatherStatus.status} />
                </Grid>
                <Grid>
                    <Typography variant="h1" component="h3">
                        12C
                    </Typography>;
                    <Typography variant="h4" component="h4">
                        <span className='primary-text'>Monday, </span>
                        <span className='secondary-text'>16:00</span>
                    </Typography>;
                </Grid>
                <Divider orientation='horizontal' sx={{
                    width: '90%',

                }}></Divider>

            </Grid>

            <Grid container justifyContent="center"
                alignItems="center"
                sx={{ padding: '24px' }}

            >
                <Grid container direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <CloudIcon />
                    <Typography variant="h5" component="h4" sx={{ margin: '8px 16px' }}>
                        Cloud
                    </Typography>
                </Grid>

                <Grid container direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
                    <GrainIcon />
                    <Typography variant="h5" component="h4" sx={{ margin: '8px 16px' }}>
                        Rain - 30%
                    </Typography >
                </Grid>
            </Grid>

            <Card component="div" sx={{ minHeight: '150px', flexGrow: 1, margin: '0 24px 0' }} >
                <CardCover>
                    <img
                        src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                        srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                        loading="lazy"
                        alt=""
                    />
                </CardCover>
            </Card>
        </Grid >
    );
}

export default SideBar;