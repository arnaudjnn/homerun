import { Box, Heading, Text, Grid, Flex } from '@chakra-ui/react';
import { Container } from 'components/common/container';
import Image from 'next/image';

export default function FeatureOneSection({
  headline,
  title,
  description,
  image,
  textOrder,
  designOrder,
  headlineColor,
  gridTemplateColumns
}) {
  return (
    <Container as="section">
      <Grid 
        gridTemplateColumns={gridTemplateColumns}
        gridColumnGap="20"
      >
        <Flex order={textOrder || 1}>
          <Box maxW="20rem">
            <Heading as="p" size="sm" color={headlineColor}>{headline}</Heading>
            <Heading size="2xl" my="5">{title}</Heading>
            <Text>{description}</Text>
          </Box>
        </Flex>
        <Flex order={designOrder || 2}>
          <Image 
            src={image.url}
            alt={image.alt}
            height={image.height}
            width={image.width}
          />
        </Flex>
      </Grid>
    </Container>
  )
}