import React from 'react'
import { makeStyles } from "@mui/styles"
import Carousel from './BodyComponents/Carousel'
import Trending from './BodyComponents/Trending'
import MoreNike from './BodyComponents/MoreNike'



const useStyles = makeStyles(() => ({
  body: {
    padding: "0 44px 50px"
  },
  bodyComponents: {
    marginTop: 84
  }
}))


const Body = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.body}>
      {/* carousel */}
      <div className={classes.bodyComponents}>
        <Carousel carouselImg={props.carouselImg} />
      </div>
      {/* Trending */}
      <div className={classes.bodyComponents}>
        <Trending titleTrending={props.titleTrending}
          dataTrending={props.dataTrending} />
      </div>



      {/*  More Nike */}
      <div className={classes.bodyComponents}>
        <MoreNike titleMoreNike={props.titleMoreNike}
          dataMoreNike={props.dataMoreNike} />
      </div>
    </div>
  )
}

export default Body