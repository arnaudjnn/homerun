import { Box, useStyleConfig } from '@chakra-ui/react';

export const Container = ({ size="default", ...rest }) => {

  const styles = useStyleConfig('Container', {
    size
  })

  return <Box overflow="hidden" sx={styles} {...rest} />
}