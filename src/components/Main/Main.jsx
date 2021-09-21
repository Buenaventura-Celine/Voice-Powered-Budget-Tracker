import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'

import Form from './Form/Form'
import List from './List/List'
import useStyles from './styles'

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Budget Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: ₱100</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* InfoCard .... */}
                    Try saying: Add EXPENSE of 50 pesos in category TRAVEL for THURSDAY
                </Typography>
                <Divider/>
                    <Form/>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
