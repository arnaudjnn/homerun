import { Grid, Flex, IconButton, Button, ButtonGroup, HStack, useBreakpointValue } from '@chakra-ui/react';
import { LogoType } from 'components/common/logo';
import NextLink from 'next/link';

const Header = () => {
  const showOnMobile = useBreakpointValue({ base: false, lg: true });
  const actionItemsSize = useBreakpointValue({ base: 'sm', lg: 'md' });

  return (
    <header>
      <Grid
        gridTemplateColumns={{ base: '1fr 90px 1fr', lg: '150px 1fr auto' }} 
        gridGap={{ base: 3, lg: 6 }}
        height={{ base: '60px', lg: '100px'}}
        px={{ base: 5, lg: 24 }}
        position="fixed"
        zIndex="sticky"
        width="100%"
        bg="brown.50"
      >
        <Flex alignItems="center">
          <NextLink href="/">
            <IconButton
              aria-label="Home"
              icon={<LogoType height={{ base: '1rem', lg: '2rem' }} />}
              variant="link"
            />
          </NextLink>
        </Flex>
        <Flex justifyContent="center">
          {showOnMobile &&
            <HStack
              as="nav"
              spacing="10"
            >
              <Button variant="link" colorScheme="black">Product</Button>
              <Button variant="link" colorScheme="black">Pricing</Button>
              <Button variant="link" colorScheme="black">Customers</Button>
              <Button variant="link" colorScheme="black">Learn</Button>
            </HStack>
          }
        </Flex>
        <ButtonGroup 
          display="flex" 
          alignItems="center" 
          spacing="5"
        >
          {showOnMobile &&
            <Button variant="link" colorScheme="purple" size={actionItemsSize}>
              Log in
            </Button>
          }
          <Button colorScheme="purple" size={actionItemsSize}>
            Start 14-day trial
          </Button>
        </ButtonGroup>
      </Grid>
    </header>
  )
}

export default Header