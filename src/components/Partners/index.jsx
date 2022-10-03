import { Flex, HStack, Image } from "@chakra-ui/react";
import DefaultButton from "../Button";
import TitleSection from "../TitleSection";
import useStart from "../../hooks/useStart";

const partnerFlex = {
    padding: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
}

export default function Partners() {
    const { partners } = useStart()
    return (
        <Flex sx={partnerFlex}>
            <TitleSection
                textTitle={'PARTNERS'}
                heading={'Lorem Ipsum Dolor'}
                textInfo={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
            <HStack
                spacing={20}
                paddingBottom='2rem'>
                {partners?.map(item => (
                    <Image key={item.id} src={item.logo} />
                ))}
            </HStack>
            <DefaultButton
                bg={'#212529'}
                color={'#fff'}
                children={'Learn More'} />
        </Flex>
    )
}