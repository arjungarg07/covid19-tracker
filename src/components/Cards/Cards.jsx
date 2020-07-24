import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup'

import styles from './Cards.module.css'


const Cards = ({data : {confirmed , recovered , deaths , lastUpdate} })=>{
    if(!confirmed){
        return 'Loading...'
    }
    
    return(
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} xs={12} md={3} className= {styles.card1}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No. of active cases in covid-19</Typography>
                    </CardContent>
                    
                </Grid>
                <Grid item component = {Card} xs={12} md={3} className= {styles.card2}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant = "h5">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No. of Recovered cases in covid-19</Typography>
                    </CardContent>
                    
                </Grid>
                <Grid item component = {Card}  xs={12} md={3} className= {styles.card3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant = "h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No. of deaths due to covid-19</Typography>
                    </CardContent>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;