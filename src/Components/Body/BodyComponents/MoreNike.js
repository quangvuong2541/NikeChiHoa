import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 24,
        marginBottom: 32
    },
    contentLink: {
        color: 'black',
        textDecoration: "none"
    },
    moreNikeContainer: {
        height: 540,
        display: "flex",
        alignItems: "flex-end",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat"
    },
    info: {
        padding: 40
    },
    trendingName: {
        color: "white",
        fontSize: 25,
        fontWeight: 400,
        marginBottom: 30
    },
    shopLink: {
        color: "black",
        textDecoration: "none",
        margin: "0 8px 8px 0",
        padding: "8px 28px",
        backgroundColor: "white",
        borderRadius: 20,
        fontSize: 16


    },
}))

const MoreNike = (props) => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.title}>{props.titleMoreNike}</div>
            <Grid container spacing={3} >
                {props.dataMoreNike.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={4} key={index}>
                            <div className={classes.moreNikeContainer} style={{ backgroundImage: `url(${item.img})` }}>
                                <div className={classes.info} >
                                    <div className={classes.shopLink}>
                                        {item.titleButton}
                                    </div>

                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default MoreNike