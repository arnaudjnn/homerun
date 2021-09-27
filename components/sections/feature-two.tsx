import { Box, Grid, Flex, Heading, Text, Icon, Stack, Button } from '@chakra-ui/react';
import { Container } from 'components/common/container';
import { FaCheckCircle } from 'react-icons/fa'

export default function FeatureTwoSection({
  title,
  features,
  button
}) {
  return (
    <Container as="section" size="pb0">
      <Box 
        layerStyle="purple"
        borderRadius="md"
        px="10"
        py="20"
      >
        <Grid gridTemplateColumns={{ base: '1fr', lg: '2fr 3fr 1fr' }} gridGap="5">
          <Flex>
            <Heading>{title}</Heading>
          </Flex>
          <Stack 
            direction={{ base: 'column', lg: 'row' }} 
            spacing="5"
            alignItems="center"
          >
            {features.map((feature, i) => (
              <Text key={i}>
                <Box as="span" mr="3">
                  <Icon as={FaCheckCircle} />
                </Box>
                {feature.title}
              </Text>
            ))}
          </Stack>
          <Flex alignItems="center">
            <Button
              variant={button.variant}
              colorScheme={button.colorScheme}
              size="lg"
              bg="black"
            >
              {button.text}
            </Button>
          </Flex>
        </Grid>
      </Box>
    </Container>
  )
}