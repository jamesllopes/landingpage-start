import { useState } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    VStack,
    Link
} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

const modalStyle = {
    backgroundColor: '#74C69D',
    alignItems: 'center',
    gap: '5rem',
    color: '#fff',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: '400',
}

export default function NavBarModal({ items }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('md')

    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    const sizes = 'full'

    return (
        <>
            <HamburgerIcon
                onClick={() => handleSizeClick(sizes)}
                key={size}
                w={10}
                h={10}
                color={'#fff'}
                display={['block', 'block', 'block', 'none']}
            />

            <Modal
                onClose={onClose}
                size={size}
                isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent
                    sx={modalStyle}>
                    <ModalHeader>Menu</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            {items?.map((item, i) => (
                                <Link key={i}
                                    fontSize='2.5rem'
                                    padding='0.6rem'
                                    href='#'>
                                    {item.page}
                                </Link>
                            ))}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}