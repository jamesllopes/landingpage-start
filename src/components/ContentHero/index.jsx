import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import classNames from 'classnames'

const contentFlex = {
    flexDirection: 'column',
    gap: '1rem',
}

const styleHeading = {
    fontSize: "1.2rem",
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '0.3rem'
}

const styleHeadingContent = {
    fontFamily: "'Crimson Text', serif",
    fontWeight: '700'
}

const styleText = {
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
}


export function ContentHero({ classes, children, welcome, ...props }) {
    return (
        <Flex
            className={classNames('ContentHero', classes)}
            sx={contentFlex}
            {...props}>
            {welcome && <Heading
                sx={styleHeading}>Welcome</Heading>}
            {children}
        </Flex >
    )
}

ContentHero.Title = function TitleHero({ classes, children }) {
    return (
        <Heading className={classNames('TitleHero', classes)}
            width={[316, 416, 516]}
            fontSize={['2rem', '2.5rem', '3rem']}
            sx={styleHeadingContent}>
            {children}
        </Heading>
    )
}

ContentHero.Text = function TextHero({ classes, children }) {
    return (
        <Text
            className={classNames('TextHero', classes)}
            width={[346, 416, 616]}
            fontSize={'1.2rem'}
            sx={styleText}>
            {children}
        </Text>
    )
}