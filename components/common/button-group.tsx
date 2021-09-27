import { ButtonGroup, Button, Icon, Stack, useBreakpointValue, StackDirection, useTheme } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaArrowLeft, FaAngleLeft } from "react-icons/fa";

export default function ButtonGroupComponent({ buttons, spacing="3", direction={ base: 'column', lg: 'row' }, fontWeight="600", ...rest }) {
  const { components: { Button: { baseStyle }}} = useTheme();
  const resDirection = useBreakpointValue(direction);

  const iconsIndex = {
    'ArrowLeft': FaArrowLeft,
    'AngleLeft': FaAngleLeft,
  }
  
  return (
    <Stack
      as={ButtonGroup}
      direction={resDirection as StackDirection}
      spacing={spacing}
      justifyContent="center"
      {...rest}
    >
      {buttons.map((button, i) => {
        return (
          <Link 
            key={i} 
            href={button.link.url}
            isExternal={button.isExternal}
          >
            <Button 
              variant={button.variant} 
              colorScheme={button.colorScheme}
              size={button.size}
              fontWeight={fontWeight}
              leftIcon={button.leftIcon && <Icon as={iconsIndex[button.leftIcon]} />}
              borderRadius={button.borderRadius || baseStyle.borderRadius}
              width={{ base: '100%', lg: 'auto' }}
            >
              {button.text}
            </Button>
          </Link>
        )
      })}
    </Stack>
  )
}

function Link({ isExternal, href, children }) {
  if(isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <NextLink href={href}>
      {children}
    </NextLink>
  )
}