import React from 'react'
import Landing from '../components/Landing'
import Nav from '../components/Nav'

const Home = (props) => {;
  return (
    <>
      <Nav props={props} />
      <Landing props={props} />
    </>
  )
}

export default Home
