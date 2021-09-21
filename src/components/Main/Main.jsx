import React, { useContext } from 'react'
import { Card, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import { ExpenseTrackerContext } from '../../context/context'

import Form from './Form/Form'
import List from './List/List'
import useStyles from './styles'
import InfoCard from './InfoCard'

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: ₱{balance}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard/>
                </Typography>
                <Divider classes={classes.divider}/>
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
