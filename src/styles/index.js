export const breakPoints = { 
    small: "30em",
    medium: "40em",
    tablet: "48em",
    large: "64em",
    xlarge: "87.5em",
    xxl: "120em",
}

export const theme = {
    colors: {
      primary: 'var(--brand-color_3)',
      secondary : 'var(--brand-color_2)',
      tertiary: 'var(--brand-color_1)',
      primaryText: 'var(--brand-color_4)',
      secondaryText: 'var(--brand-color_5)',
      fontPrimary: 'var(--font-primary)',
      fontSecondary: ''
    },
    fontsizes: {
  
    },
    paddings: {
        xs: "4px",
        s: "8px",
        m: "16px",
        l: "32px",
    }
}

export const boxShadowGen = (type, color) => {
    const size = type === 'strong' ? "4px" : "2px"
    return `box-shadow: ${size} ${size} 0px ${color}`
}