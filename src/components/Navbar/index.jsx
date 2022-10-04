import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import NavBarModal from "../Modal/NavBarModal";


const headerNav = {
    fontSize: '1.6rem',
    color: '#fff',
    fontWeight: '400'
}

export default function Navbar() {
    const menuItems = [{ page: "Home", link: '#' }, { page: "Portfolio", link: '#' }, { page: "Services", link: '#' }, { page: "Contact", link: '#' }]
    return (
        <>
            <NavBarModal />
            <HamburgerIcon
                w={10}
                h={10}
                color={'#fff'}
                display={['block', 'block', 'block', 'none']}
            />
            <Breadcrumb separator=''
                display={['none', 'none', 'none', 'block']}
            >
                {menuItems?.map((item, i) => (
                    <BreadcrumbItem key={i}>
                        <BreadcrumbLink sx={headerNav} href={item.link}>{item.page}</BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>

        </>
    )
}