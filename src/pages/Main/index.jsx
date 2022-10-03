import { useEffect } from 'react'
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
  const { setTeam, setSociais, setPartners, setHero, hero } = useStart()
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
          {firstHero.title}
          {firstHero.text}
          <DefaultButton
            color={"#000"}>Explore</DefaultButton>
        </ContentHero>
        <ImageHero>
          {firstHero.image}
        </ImageHero>
      </Hero>
      <FlexContainer>
        <ContentFlexContainer
          textTitle={'PARTNERS'}
          heading={'Lorem Ipsum Dolor'}
          textInfo={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
        <CardPartners />
        <DefaultButton
          bg={'#212529'}
          color={'#fff'}
          children={'Learn More'} />
      </FlexContainer>
      <Hero>
        <ImageHero>
          {secondHero.image}
        </ImageHero>
        <ContentHero>
          {secondHero.title}
          {secondHero.text}
          <DefaultButton
            backgroundColor={'#212529'}
            color={'#fff'}>Learn More</DefaultButton>
        </ContentHero>
      </Hero>
      <Hero>
        <ContentHero>
          {thirdHero.title}
          {thirdHero.text}
          <DefaultButton
            backgroundColor={'#212529'}
            color={'#fff'}>Learn More</DefaultButton>
        </ContentHero>
        <ImageHero>
          {thirdHero.image}
        </ImageHero>
      </Hero>
      <FlexContainer>
        <ContentFlexContainer
          textTitle={'TEAMS'}
          heading={'Lorem Ipsum Dolor'}
          textInfo={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
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