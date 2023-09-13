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
                <span>ABB</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m3.png'} width={20} height={20}/>
                <span>Center</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m4.png'} width={20} height={20}/>
                <span>Unec</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m5.png'} width={20} height={20}/>
                <span>SDS</span>
            </div>
            <div className="Con2" style={{borderRight:'solid thin lightgrey'}}>
                <Image src={'/assets/m6.png'} width={20} height={20}/>
                <span>Start-Up</span>
            </div>
            <div className="Con2" >
                <Image src={'/assets/m7.png'} width={20} height={20}/>
                <span>Innovasiya</span>
            </div>

        </div>
    </div>
  )
}

export default Bar2;