import Image from "next/image"

const Bar = () => {
  return (
    <div className='search'>
        <div className="search-con">

            <div className="Con" style={{borderRight:'solid thin lightgrey'}}> 
                <Image src="/assets/i1.png"
                width={30}
                height={25}
                />
                <span>Ad</span>
            </div>
            <div className="Con" style={{borderRight:'solid thin lightgrey'}}>
                <Image src="/assets/i2.png"
                width={30}
                height={30}
                />
                <span>Yer</span>
            </div>
            <div className="Con" >
                <Image src="/assets/i3.png"
                width={30}
                height={30}
                />
                <span>Spesilizasiya</span>
            </div>
            <button className="bbb">Axtar</button>

        </div>
    </div>
  )
}

export default Bar