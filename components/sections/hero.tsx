import { Box, Heading, Text, Grid } from '@chakra-ui/react';
import { Container } from 'components/common/container';
import ButtonGroup from 'components/common/button-group';
import Image from 'next/image';

export default function HeroSection({ 
  title, 
  description, 
  buttons,
  logosTitle,
  logos,
  image
}) {
  return (
    <Container as="section">
      <Box textAlign="center" mb="5">
        <Heading as="h1" size="4xl" mx="auto" maxW="xl">{title}</Heading>
        <Text opacity=".8" mx="auto" maxW="md" my="10">{description}</Text>
      </Box>
      <ButtonGroup buttons={buttons}/>
      <Box textAlign="center" my="20">
        <Text mb="10" opacity=".5">{logosTitle}</Text>
        <Grid 
          gridTemplateColumns={{ base: '1fr 1fr', lg: 'repeat(7, auto)' }}
          gridGap="10"
          maxW="4xl"
          mx="auto"
        >
          {logos.map(logo => (
            <Image 
              key={logo.url}
              src={logo.url}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
            />
          ))}
        </Grid>
      </Box>
      <Image 
        src={image.url}
        alt={image.alt}
        height={image.height}
        width={image.width}
      />
    </Container>
  )
}