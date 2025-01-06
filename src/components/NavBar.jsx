import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image } from '@chakra-ui/react'

import logoImage from '../images/Img02.png'

const NavBar = () => {
  return (
    <div>
        
        <Flex bg='#1d486a' color='#66dcd7' p={2} align='center' justify='space-between'>
            <Box >
                <Image src={logoImage} alt="Gamer-Store Logo" w={100} h={40} objectFit="cover" borderRadius="10px"/>
            </Box>
            <Spacer />

            <Menu>
                <MenuButton>
                    Productos
                </MenuButton>
                <MenuList>
                    <MenuItem>Medicamentos</MenuItem>
                    <MenuItem>Alimentos</MenuItem>
                    <MenuItem>Vitaminas</MenuItem>
                    <MenuItem>Juguetes</MenuItem>
                    <MenuItem>Accesorios</MenuItem>
                    <MenuItem>Gimnasios</MenuItem>
                    <MenuItem>Premium</MenuItem>
                </MenuList>
            </Menu>


            <Spacer />
            <Box >
                <CartWidget />
            </Box>
        </Flex>



    </div>
  )
}

export default NavBar