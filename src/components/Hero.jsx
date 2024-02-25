import { imgHero, imgHeroMb, clientAudio, clientDatabiz, clientMaker, clientMeet } from "../assets"
import { useContext ,useState } from "react"
import Button from './Button'
import Navbar from "./Navbar"
import { Context } from "../App"
function Hero() {

  const [ width, setWidth ] = useState(window.innerWidth)
  const [clickBar, setClickBar] = useContext(Context)

  console.log(clickBar)
  console.log(Navbar.clickBar)

  const clientImgArr =[
    clientDatabiz,
    clientAudio,
    clientMeet,
    clientMaker
  ]

  function handleResize(){
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    if (width > 768)
    {
      return imgHero 
    }
    else
    {
      return imgHeroMb
    }
  }

  return (
    <div className="flex justify-center md:p-[5rem] p-0 pt-[3rem] z-[99]">
        <div className="flex gap-[4rem] items-center md:flex-row flex-col-reverse">

            <div className="flex flex-col md:gap-[3rem] gap-[1.5rem]
             p-[.5rem] md:items-start items-center md:text-start text-center">
              <h1 className=" md:text-[60px] text-[30px]
               md:text-start text-center md:w-[26rem]w-[2 0rem] text-wrap font-bold leading-[4rem]"
              >Make <br className="md:flex hidden" /> Remote Work</h1>

              <p className="max-w-[700px]">
                Lorem ipsum dolor sit amet
                 consectetur adipisicing elit. Omnis totam unde,
                  odio, sed ipsam est quasi explicabo iusto minus
                  distinctio dolore? Tempore perferendis, officiis
              </p>
              <div className={`w-[140px] ${clickBar ? 'z-0' : 'z-[-1]'}`}>
                <Button value={'Learn more'} /> 
              </div>

              <div >
                <ul className="flex flex-row gap-[1rem] mt-[5rem]">
                  {clientImgArr.map((client, index) => (
                      <li key={index}><img src={client}></img></li>
                      ))}
                </ul>
              </div>
              
            </div>
            
            <div className="md:max-w-[450px]">
              <img src={handleResize()} alt="img hero" />
            </div>
        </div>
    </div>
  )
}
export default Hero
