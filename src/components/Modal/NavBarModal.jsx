import { useState } from "react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react"
export default function NavBarModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('md')

    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = 'full'

    return (
        <>

            <Button
                onClick={() => handleSizeClick(sizes)}
                key={size}
                m={4}
            >{`Open ${size} Modal`}</Button>


            <Modal onClose={onClose} size={size} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Lorem count={2} /> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}