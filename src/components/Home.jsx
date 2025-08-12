import React from 'react'
import Lounge from './Lounge'
import Spa from './Spa'
import Fitness from './Fitness'
import Pool from './Pool'

const Home = () => {
  return (
    <>
    <Lounge />
    <hr style={{ margin: "30px 0px",color: "grey" }}/>
    <Spa />
    <hr style={{ margin: "30px 0px",color: "grey" }}/>
    <Fitness />
    <hr style={{ margin: "30px 0px",color: "grey" }}/>
    <Pool />

    </>
  )
}

export default Home
