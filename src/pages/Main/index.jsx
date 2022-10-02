import { useEffect } from 'react'
import Footer from '../../components/commons/Footer'
import Header from "../../components/commons/Header"
import Hero from "../../components/commons/Hero"
import Partners from '../../components/Partners'
import Team from "../../components/Team"
import useStart from "../../hooks/useStart"
import './style.css'

export default function App() {
  const { setTeam, setSociais, setPartners, setHero, hero } = useStart()

  const getDataApi = async () => {
    let response = await fetch('./db.json')
    let data = await response.json()
    setTeam(data.teams)
    setSociais(data.sociais)
    setPartners(data.partners)
    setHero(data.hero)
  }

  useEffect(() => {
    getDataApi()
  }, [])

  return (
    <div className="main">
      <Header />
      <Hero
        welcome={"Welcome"}
        color={'#fff'}
        childrenImage={hero[0]?.image}
        childrenText={hero[0]?.text}
        childrenTitle={hero[0]?.title}
        backgroundColor={'#74C69D'} />
      <Partners />
      <Hero
        childrenImage={hero[1]?.image}
        childrenText={hero[1]?.text}
        childrenTitle={hero[1]?.title}
        direction={'row-reverse'} />

      <Hero
        childrenImage={hero[2]?.image}
        childrenText={hero[2]?.text}
        childrenTitle={hero[2]?.title}
      />
      <Team />
      <Footer />
    </div>
  )
}