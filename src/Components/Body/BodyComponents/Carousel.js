import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    image: {
        maxHeight: "100%",
        maxWidth: "100%"
    }
}))

const Carousel = (props) => {
    const classes = useStyles()
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return (
        <div>
            <Container maxWidth="xl" >
                <Grid item xs={12}>
                    <Slider {...settings} >
                        {props.carouselImg.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Card className={classes.image}>
                                        <CardActionArea >
                                            <CardMedia
                                                component="img"
                                                image={item}
                                                title='Contemplative Reptile'
                                            />

                                        </CardActionArea>
                                    </Card>
                                </div>
                            )
                        })}


                    </Slider>

                </Grid>
            </Container>
        </div>
    )
}

export default Carousel