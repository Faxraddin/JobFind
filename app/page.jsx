import React from "react"
import Image from 'next/image'

import Professions from "@components/Profesions";
import Explore from "@components/Explore";
import Feather from "@components/Feathur";
import Footer from "@components/Footer";

const Home = () => {
    return(
        <>
            <section className="main-page">
                <div className="main-container">
                    <section className="main-heading">
                        <h1>Hurry to build your career here</h1>
                        <h3>Growing A Bussiness Means  The Right People In Your Team</h3>
                        <Image
                            src="/assets/bar.png"
                            width={800}
                            height={60}
                            className="main-logo"
                            style={{borderRadius:'15px'}}
                            alt="Picture of the author"
                        />
                        <Image
                            src="/assets/logos.png"
                            width={1250}
                            height={100}
                            className="main-logo2"
                            style={{borderRadius:'15px'}}
                            alt="Picture of the author"
                        />
                    </section>
    
                </div>
            </section>
            <Professions/>
            <Explore/>
            <Feather/>
            <Footer/>
        </>
    )
}

export default Home;