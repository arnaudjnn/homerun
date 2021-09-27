import { Box, Heading, Text, Grid, Flex } from '@chakra-ui/react';
import { Container } from 'components/common/container';
import Image from 'next/image';

export default function GridOneSection({
  title,
  description,
  features
}) {
  return (
    <Container 
      as="section"
      size="px50"
    >
      <Box 
        layerStyle="gray"
        borderRadius="md"
      >
        <Box textAlign="center" py={{ base: 10, lg: 20 }}>
          <Heading size="2xl" mx="auto" maxW="xl" mb="5">{title}</Heading>
          <Text mx="auto" maxW="md">{description}</Text>
        </Box>
        <Grid 
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }} 
          gridGap="5"
          px={{ base: 5, lg: 10 }}
          py="10"
        >
          {features.map((feature, i) => (
            <Card key={i} {...feature} />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

function Card({ image, title, description, layerStyle, gridRow }) {
  return (
    <Grid
      gridTemplateRows="auto 1fr"
      gridGap="10"
      p="10"
      layerStyle={layerStyle}
      gridRow={gridRow}
      borderRadius="lg"
    >
      <Flex justifyContent="center">
        <Image 
          src={image.url}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
      </Flex>
      <Flex flexDirection="column" justifyContent="flex-end">
        <Heading as="h3" size="lg" mb="3">{title}</Heading>
        <Text>{description}</Text>
      </Flex>
    </Grid>
  )
}