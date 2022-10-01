import { Button } from "@chakra-ui/react"

export default function DefaultButton(props) {
    return (
        <Button
            backgroundColor={props.bg}
            color={props.color}>
            {props.content}
        </Button>
    )
}