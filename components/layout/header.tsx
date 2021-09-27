import { Grid, Flex, IconButton, Button, ButtonGroup, HStack } from '@chakra-ui/react';
import { Container } from 'components/common/container';
import { LogoType } from 'components/common/logo';
import NextLink from 'next/link';

const Header = () => (
  <Container
    as="header"
    size="py0"
    overflow="visible"
    zIndex="sticky"
  >
    <Grid
      gridTemplateColumns={{ base: '1fr 90px 1fr', lg: '150px 1fr auto' }} 
      gridGap={{ base: 3, lg: 6 }}
      height={{ base: '60px', lg: '100px'}}
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
        <HStack
          as="nav"
          spacing="10"
        >
          <Button variant="link" colorScheme="black">Product</Button>
          <Button variant="link" colorScheme="black">Pricing</Button>
          <Button variant="link" colorScheme="black">Customers</Button>
          <Button variant="link" colorScheme="black">Learn</Button>
        </HStack>
      </Flex>
      <ButtonGroup 
        display="flex" 
        alignItems="center" 
        spacing="5"
      >
        <Button variant="link" colorScheme="purple">
          Log in
        </Button>
        <Button colorScheme="purple">
          Start 14-day trial
        </Button>
      </ButtonGroup>
    </Grid>
  </Container>
)

export default Header