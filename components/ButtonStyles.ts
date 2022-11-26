import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const colors = {
  dark1:'#0e1a28',
  light1:'#0b2237',
  text1:'#aaa',
  text2:'#ccc',
  textWhite:'#fff',
  red1:'#ae4207',
  red2:'#cc4207',
  blue1:'blue'

}

const baseStyle = defineStyle({
  borderRadius: 0, // disable the border radius
  fontWeight: "normal", // change the font weight to normal
  fontFamily: "mono", // change the font family to monospaced
})

const sizes = {
  md: defineStyle({
    fontSize: "sm", // Change font size to sm (14px)
  }),
  sm:defineStyle({
    height:'28px',
    px:3,
  })
}


const hotVariant = defineStyle((props) => {
  return {
    fontFamily: "sans-serif",
    bg: colors.dark1,
    border:`1px solid ${colors.text1}`,
    color: colors.text1,
    borderRadius: '3xl',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',

    _hover: {
      bg: colors.light1,
      border:`1px solid ${colors.text2}`,
      color: colors.text2,
      transform:'scale(1.05,1.05)',
    },

    _active: {
      bg: colors.light1,
      transform: "scale(1, 1)",
    },
  }
})

const aucVariant = defineStyle((props) => {
  return {
    fontFamily: "sans-serif",
    bg: colors.dark1,
    border:`1px solid ${colors.red1}`,
    color: colors.textWhite,
    borderRadius: '3xl',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',

    _hover: {
      bg: colors.light1,
      border:`1px solid ${colors.red2}`,
      color: colors.textWhite,
      transform:'scale(1.05,1.05)',
    },

    _active: {
      bg: colors.light1,
      transform: "scale(1, 1)",
    },
  }
})

const saleVariant = defineStyle((props) => {
  return {
    fontFamily: "sans-serif",
    bg: colors.dark1,
    border:`1px solid ${colors.blue1}`,
    color: colors.textWhite,
    borderRadius: '3xl',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',

    _hover: {
      bg: colors.light1,
      border:`1px solid ${colors.blue1}`,
      color: colors.textWhite,
      transform:'scale(1.05,1.05)',
    },

    _active: {
      bg: colors.light1,
      transform: "scale(1, 1)",
    },
  }
})





export const buttonTheme:any = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    hot:hotVariant,
    auc:aucVariant,
    sale:saleVariant  
  },
  defaultProps: {
    colorScheme: "purple", // set the default color scheme to purple
  },
})  