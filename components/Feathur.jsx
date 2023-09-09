import Image from 'next/image'

export default function Feather() {
    return(
        <section className="feather">
            <div className="feather-container">
                <Image
                    src="/assets/feat.png"
                    width={1250}
                    height={350}
                    style={{borderRadius:'15px',marginTop:'20px'}}
                    alt="Picture of the author"
                />
            </div>
        </section>
    )
}