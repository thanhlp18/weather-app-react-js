import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './pages/SideBar';
import Content from './pages/Content';
import { Grid } from '@mui/material';
import styled, { css } from 'styled-components'
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

    return (
        <Box $secondary className='box'>
            <Grid container spacing={0}>
                <Grid item md={4} >
                    <SideBar />
                </Grid>
                <Grid item md={8} >
                    <Content />
                </Grid>
            </Grid >
        </Box>
    );
}

export default WeatherFeature;