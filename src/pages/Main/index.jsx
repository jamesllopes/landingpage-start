import { useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import Footer from '../../components/commons/Footer'
import Header from "../../components/commons/Header"
import Hero from "../../components/commons/Hero"
import ContentFlexContainer from "../../components/ContentFlexContainer";
import ContentHero from "../../components/ContentHero"
import useStart from "../../hooks/useStart"
import DefaultButton from '../../components/Button';
import ImageHero from '../../components/ImageHero';
import FlexContainer from '../../components/commons/FlexContainer'
import CardPartners from '../../components/Cards/CardPartners'
import Team from '../../components/Team';
import './style.css'

export default function App() {
  const { setTeam, setSociais, setPartners, setHero, hero, team, partners } = useStart()
  const firstHero = { ...hero[0] },
    secondHero = { ...hero[1] },
    thirdHero = { ...hero[2] }


  const getDataApi = async () => {
    let response = await fetch('./db.json'),
      data = await response.json()
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
        backgroundColor={'#74C69D'}>
        <ContentHero
          welcome={"Welcome"}
          color={"#fff"}>
          {firstHero?.title}
          {firstHero?.text}
          <DefaultButton
            color={"#000"}>Explore</DefaultButton>
        </ContentHero>
        <ImageHero>
          {firstHero?.image}
        </ImageHero>
      </Hero>
      <FlexContainer>
        <ContentFlexContainer>
          PARTNERS
          {partners?.title}
          {partners?.text}
        </ContentFlexContainer>
        <CardPartners />
        <DefaultButton
          bg={'#212529'}
          color={'#fff'}
          children={'Learn More'} />
      </FlexContainer>
      <Hero>
        <ImageHero>
          {secondHero?.image}
        </ImageHero>
        <ContentHero>
          {secondHero?.title}
          {secondHero?.text}
          <DefaultButton
            backgroundColor={'#212529'}
            color={'#fff'}>Learn More</DefaultButton>
        </ContentHero>
      </Hero>
      <Hero>
        <ContentHero>
          {thirdHero?.title}
          {thirdHero?.text}
          <DefaultButton
            backgroundColor={'#212529'}
            color={'#fff'}>Learn More</DefaultButton>
        </ContentHero>
        <ImageHero>
          {thirdHero?.image}
        </ImageHero>
      </Hero>
      <FlexContainer>
        <ContentFlexContainer>
          TEAMS
          {team?.title}
          {team?.text}
        </ContentFlexContainer>
        <Team />
        <DefaultButton
          bg={'#212529'}
          color={'#fff'}
          children={'View Team'} />
      </FlexContainer>
      <Footer />
    </div>
  )
}