import Image from 'next/image'

export default function Explore() {
    return(
        <section className="explore">
            <div className="explore-container">
                <Image
                    src="/assets/page1.png"
                    width={1250}
                    height={500}
                    style={{borderRadius:'15px',marginTop:'20px'}}
                    alt="Picture of the author"
                />
            </div>
        </section>
    )
}