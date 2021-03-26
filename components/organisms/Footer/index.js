// ui
import { AddIcon, CheckIcon, SettingsIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/layout"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// next
import Link from "next/link"

/**
 * Footer Component
 * @component
 * @description Componente Footer con acceso a las paginas
 */
const Footer = () => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-around"
      p="1rem"
      bgColor={backgroundColor}
    >
      <Link href="/Home">
        <CheckIcon fontSize="1.5rem" />
      </Link>
      <Link href="/Item">
        <AddIcon fontSize="1.5rem" />
      </Link>
      <Link href="/Config">
        <SettingsIcon fontSize="1.5rem" />
      </Link>
    </Flex>
  )
}

export default Footer
