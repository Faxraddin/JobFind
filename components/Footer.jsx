import Image from 'next/image'

export default function Footer() {
    return(
        <section className="footer">
            <div className="footer-container">
                <Image
                    src="/assets/footer.png"
                    width={1350}
                    height={350}
                    style={{borderRadius:'15px',marginTop:'20px'}}
                    alt="Picture of the author"
                />
            </div>
        </section>
    )
}