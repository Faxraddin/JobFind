import Image from 'next/image'

export default function Professions(){
    return(
        <section className="profesions">
            <div className="profesions-container">

                <div className='prof'>
                    <div>
                        <Image
                            src='/assets/mininav.png'
                            width={1160}
                            height={60}
                            style={{borderRadius:'25px',position:'relative',top:'-30px'}}
                        />
                    </div>
                    <div className='compts'>
                        <Image
                            src='/assets/comp.png'
                            width={200}
                            height={240}
                            style={{borderRadius:'15px',position:'relative'}}
                        />
                        <Image
                            src='/assets/comp.png'
                            width={200}
                            height={240}
                            style={{borderRadius:'15px',position:'relative'}}
                        />
                        <Image
                            src='/assets/comp.png'
                            width={200}
                            height={240}
                            style={{borderRadius:'15px',position:'relative'}}
                        />
                        <Image
                            src='/assets/comp.png'
                            width={200}
                            height={240}
                            style={{borderRadius:'15px',position:'relative'}}
                        />
                        <Image
                            src='/assets/comp.png'
                            width={200}
                            height={240}
                            style={{borderRadius:'15px',position:'relative'}}
                        />
                        <Image
                            src='/assets/comp.png'
                            width={200}
                            height={240}
                            style={{borderRadius:'15px',position:'relative'}}
                        />
                        <Image
                            src='/assets/comp.png'
                            width={200}
                            height={240}
                            style={{borderRadius:'15px',position:'relative'}}
                        />
                        <Image
                            src='/assets/comp.png'
                            width={200}
                            height={240}
                            style={{borderRadius:'15px',position:'relative'}}
                        />
                    </div>
                    <div className='compts2'>
                        <h4>How it works</h4>
                        <h1>Easy step to get your dream job here</h1>
                        <div className='compts-con'>
                            <Image
                                src='/assets/com.png'
                                width={300}
                                height={200}
                                style={{borderRadius:'15px',position:'relative'}}
                            />
                            <Image
                                src='/assets/com.png'
                                width={300}
                                height={200}
                                style={{borderRadius:'15px',position:'relative'}}
                            />
                            <Image
                                src='/assets/com.png'
                                width={300}
                                height={200}
                                style={{borderRadius:'15px',position:'relative'}}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}