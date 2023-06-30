import React from 'react'
import Body from './Body/Body'
import Container from '@mui/material/Container';

const Maincontainer = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <Body
                    carouselImg={props.carouselImg}
                    titleTrending={props.titleTrending}
                    dataTrending={props.dataTrending}
                    titleMoreNike={props.titleMoreNike}
                    dataMoreNike={props.dataMoreNike}
                    merchMenu={props.smerchMenu}
                />
                </Container>
        </React.Fragment>
    )
}

export default Maincontainer