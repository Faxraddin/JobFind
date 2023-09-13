import React from "react"
import Image from 'next/image'

import Professions from "@components/Profesions";
import Explore from "@components/Explore";
import Feather from "@components/Feathur";
import Footer from "@components/Footer";
import Bar from "@components/bar";

const Home = () => {
    return(
        <>
            <section className="main-page">
                <div className="main-container">
                    <section className="main-heading">
                        <h1>Yenilikçi ağıllar möcüzələr yaradır</h1>
                        <h3>Gələcəyi innovasiyalar vasitəsilə formalaşdırmaq cəsarət tələb edir</h3>

                        <Bar/>
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