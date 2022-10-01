import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from "@chakra-ui/react";

const headerNav = {
    fontSize: '1.6rem',
    color: '#fff',
    fontWeight: '400'
}

export default function Navbar() {
    const menuItems = [{ page: "Home", link: '#' }, { page: "Portfolio", link: '#' }, { page: "Services", link: '#' }, { page: "Contact", link: '#' }]
    return (
        <Breadcrumb separator=''>
            {menuItems?.map((item, i) => (
                <BreadcrumbItem key={i}>
                    <BreadcrumbLink sx={headerNav} href={item.link}>{item.page}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    )
}