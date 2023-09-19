import Image from 'next/image'

export default function Explore() {
    return(
        <section className="explore">
            <div className="explore-container">
                <h1>Startap dünyasına bizimlə qatılın</h1>

                <div style={{display:'flex',justifyContent:'space-between',gap:'20px'}}>
                    <div className='eba'>
                        <Image src={'/assets/e1.png'} height={180} width={284} style={{borderRadius:'15px'}}/>
                        <h3>İnkişaf təcrübəsinin əsasları</h3>
                        <h5>Jeyhun Bakhtiyarov</h5>
                    </div>
                    <div className='eba'>
                        <Image src={'/assets/e2.png'} height={180} width={284} style={{borderRadius:'15px'}}/>
                        <h3>UX/UI əsasları</h3>
                        <h5>Royana Alieva</h5>
                    </div>
                    <div className='eba'>
                        <Image src={'/assets/e3.png'} height={180} width={284} style={{borderRadius:'15px'}}/>
                        <h3>Mühəndisliyin əsasları</h3>
                        <h5>Farhad Mammadov</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}
