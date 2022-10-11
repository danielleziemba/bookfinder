import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Main from '../../components/main/Main'
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Home