import React from "react";
import { Text, Heading, Flex } from "@chakra-ui/react";
import classNames from "classnames"


const teamTextTitle = {
    textAlign: "center",
    color: "#74C69D",
    fontSize: "1rem",
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: "700",
    letterSpacing: "5px",
    paddingTop: "2rem"
}

const teamHeading = {
    textAlign: "center",
    color: "#212529",
    fontFamily: "'Crimson Text', serif",
    fontWeight: "700",
}

const teamText = {
    textAlign: "center",
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: "400",
    paddingBottom: "1.5rem"
}

export function ContentFlexContainer({ children, classes }) {
    return (
        <Flex
            className={classNames("ContentFlexContainer", classes)}
            direction={'column'}
            align='center'
            w={'100%'}
            gap='1rem'>
            {children}
        </Flex>
    )
}

ContentFlexContainer.Info = function InfoContainer({ children, classes }) {
    return (
        <Text
            className={classNames('InfoContainer', classes)}
            sx={teamTextTitle}>
            {children}
        </Text>
    )
}

ContentFlexContainer.Title = function TitleContainer({ children, classes }) {
    return (
        <Heading
            className={classNames('TitleContainer', classes)}
            fontSize={['2rem', '2.5rem', '3rem']}
            sx={teamHeading}>
            {children}
        </Heading>
    )
}

ContentFlexContainer.Text = function TextContainer({ children, classes }) {
    return (
        <Text
            className={classNames('TextContainer', classes)}
            width={['90%', '70%', '35%']}
            fontSize={['1.5rem', '1.6rem', '2rem']}
            sx={teamText}>
            {children}
        </Text>
    )
}