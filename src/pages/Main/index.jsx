import { useEffect } from 'react'
import Footer from '../../components/commons/Footer'
import Header from "../../components/commons/Header"
import Welcome from "../../components/Hero"
import Team from "../../components/Team"
import useStart from "../../hooks/useStart"
import './style.css'

export default function App() {
  const { setTeam } = useStart()

  const getTeamApi = async () => {
    let response = await fetch('./db.json')
    let data = await response.json()
    setTeam(data.teams)
  }

  useEffect(() => {
    getTeamApi()
  }, [])

  return (
    <div className="main">
      <Header />
      <Welcome />
      <Team />
      <Footer />
    </div>
  )
}