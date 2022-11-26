import { extendTheme } from "@chakra-ui/react";
import {buttonTheme} from './ButtonStyles'

export const myTheme = extendTheme({
    components: { Button: buttonTheme },
  })