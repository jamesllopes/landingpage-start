import { useEffect } from 'react'
import Footer from '../../components/commons/Footer'
import Header from "../../components/commons/Header"
import Welcome from "../../components/Hero"
import Partners from '../../components/Partners'
import Team from "../../components/Team"
import useStart from "../../hooks/useStart"
import './style.css'

export default function App() {
  const { setTeam, setSociais, setPartners } = useStart()

  const getDataApi = async () => {
    let response = await fetch('./db.json')
    let data = await response.json()
    setTeam(data.teams)
    setSociais(data.sociais)
    setPartners(data.partners)
  }

  useEffect(() => {
    getDataApi()
  }, [])

  return (
    <div className="main">
      <Header />
      <Welcome />
      <Partners />
      <Team />
      <Footer />
    </div>
  )
}