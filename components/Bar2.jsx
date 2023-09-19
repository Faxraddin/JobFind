import Image from "next/image"

const Bar2 = () => {
  return (
    <div className='search2'>
        <div className="search-con2">

            <div className="Con2" style={{ backgroundColor: 'rgb(36, 106, 237)',borderRadius:'20px'}}> 
                <Image src={'/assets/m1.png'} width={20} height={20}/>
                <span >Hamisi</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m2.png'} width={20} height={20}/>
                <span>Mühəndislik</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m3.png'} width={20} height={20}/>
                <span>Marketing</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m4.png'} width={20} height={20}/>
                <span>Dizayn</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m5.png'} width={20} height={20}/>
                <span>Inkişaf</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m6.png'} width={20} height={20}/>
                <span>Insan resursları</span>
            </div>
            <div className="Con2" >
                <Image src={'/assets/m7.png'} width={20} height={20}/>
                <span>Biznesin idarə edilməsi</span>
            </div>

        </div>
    </div>
  )
}

export default Bar2;