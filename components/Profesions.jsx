import Image from 'next/image'
import Bar2 from './Bar2'

export default function Professions(){
    return(
        <section className="profesions">
            <div className="profesions-container">

                <div className='prof'>
                    <div>
                        <Bar2/>
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
                        <h4>Nece olur</h4>
                        <h1>Xəyal etdiyiniz işi əldə etmək üçün asan addım</h1>
                        <div className='compts-con'>
                            <div className='r'>
                                <Image
                                src={'/assets/r1.png'}
                                width={50}
                                height={50}
                                style={{borderRadius:'20px'}}
                                />
                                <h3>Əməkdaşlıq</h3>
                                <p>Güclü startaplar yaxşı komanda ilə qurulur</p>
                            </div>
                            <div className='r'>
                                <Image
                                src={'/assets/r2.png'}
                                width={50}
                                height={50}
                                style={{borderRadius:'20px'}}
                                />
                                <h3>Peşəkarlıq</h3>
                                <p>Mentor olan startaplar 70% daha uğurlu olur</p>
                            </div>
                            <div className='r'>
                                <Image
                                src={'/assets/r3.png'}
                                width={50}
                                height={50}
                                style={{borderRadius:'20px'}}
                                />
                                <h3>İnkişaf</h3>
                                <p>İnkişafın təməli innovagivlikdir.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}