import React from 'react'

export default function HeroHOC(WrappedComponent) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <Hero
                        welcome={"Welcome"}
                        color={'#fff'}
                        childrenImage={hero[0]?.image}
                        childrenText={hero[0]?.text}
                        childrenTitle={hero[0]?.title}
                        backgroundColor={'#74C69D'} />
                </>
            )
        }
    }
}