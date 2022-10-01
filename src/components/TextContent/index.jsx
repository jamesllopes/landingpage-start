import { Flex, Heading, Text } from "@chakra-ui/react";
import DefaultButton from "../Button";

const textContentFlex = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '416px',
  gap: '1rem',
}

const styleHeading = {
  fontSize: '2.5rem',
  fontFamily: "'Crimson Text', serif",
  fontWeight: '700'
}

const styleText = {
  fontSize: '1rem',
  fontFamily: "'Work Sans', sans-serif",
  fontWeight: '400',
}

export default function TextContent(props) {
  return (
    <Flex
      sx={textContentFlex}>
      <Heading
        sx={styleHeading}
        color={props.color}>Lorem ipsum dolor sit amet consectetur
      </Heading>
      <Text
        sx={styleText}
        color={props.color}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
      </Text>
      <DefaultButton
        content={'Explore'} />
    </Flex>
  )
}