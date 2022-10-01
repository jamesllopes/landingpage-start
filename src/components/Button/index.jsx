import { Button } from "@chakra-ui/react"

const styleButton = {
    width: '170px',
    fontSize: '1.2rem',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400'
}

export default function DefaultButton(props) {
    return (
        <Button
            sx={styleButton}
            backgroundColor={props.bg}
            color={props.color}>
            {props.content}
        </Button>
    )
}