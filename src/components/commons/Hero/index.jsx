import {
    Flex,
    Heading,
    Text,
    Box,
    Image
} from "@chakra-ui/react";
import { ButtonPrimary } from "../../Button";
import useStart from "../../../hooks/useStart";

const welcomeFlex = {
    width: '100%',
    height: '50%',
    padding: '4% 10% 2% 10%',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const contentFlex = {
    flexDirection: 'column',
    gap: '0.7rem'
}

const styleHeading = {
    fontSize: "1.2rem",
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '0.3rem'
}

const textContentFlex = {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '416px',
    gap: '1rem',
}

const styleHeadingContent = {
    fontSize: '2.5rem',
    fontFamily: "'Crimson Text', serif",
    fontWeight: '700'
}

const styleText = {
    fontSize: '1rem',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
}


export default function Welcome({ welcome, childrenTitle, childrenText, childrenImage, ...props }) {

    const { hero } = useStart()
    return (
        <Flex
            sx={welcomeFlex}
            {...props}>
            <Flex sx={contentFlex}>
                {welcome && <Heading sx={styleHeading}>{welcome}</Heading>}
                <Flex
                    sx={textContentFlex}>
                    <Heading
                        sx={styleHeadingContent}
                        {...props}>{childrenTitle}
                    </Heading>
                    <Text
                        sx={styleText}
                        {...props}>
                        {childrenText}
                    </Text>
                    <ButtonPrimary
                        children={'Explore'}
                        backgroundColor={'#fff'}
                        color={'#000'} />
                </Flex>
            </Flex>
            <Box>
                <Image src={childrenImage} width='100%' />
            </Box>
        </Flex>
    )
}