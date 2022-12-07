const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

// Some random palette from: https://coolors.co/60afff-385f71-fffcf9-379634-0a3200
const blueSapphire = '#385F71'
const BabyPowder = '#FFFCF9'
const blueJeans = '#60AFFF'
const slimyGreen = '#379634'
const forestGreen = '#0A3200'

export default {
  light: {
    main: blueSapphire,
    accent: blueJeans,

    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    test: 'red'
  },
  dark: {
    main: blueSapphire,
    accent: blueJeans,

    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark
  }
}
