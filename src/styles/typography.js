import * as Mixins from './mixins';

const FONT_EXT = '.otf';

export const FONTS_TO_LOAD = {
    Roboto_100Thin:           require('../assets/fonts/Roboto/Roboto-Thin' + FONT_EXT),
    Roboto_100Thin_Italic:    require('../assets/fonts/Roboto/Roboto-ThinItalic' + FONT_EXT),
    Roboto_300Light:          require('../assets/fonts/Roboto/Roboto-Light' + FONT_EXT),
    Roboto_300Light_Italic:   require('../assets/fonts/Roboto/Roboto-LightItalic' + FONT_EXT),
    Roboto_400Regular:        require('../assets/fonts/Roboto/Roboto-Regular' + FONT_EXT),
    Roboto_400Regular_Italic: require('../assets/fonts/Roboto/Roboto-Italic' + FONT_EXT),
    Roboto_500Medium:         require('../assets/fonts/Roboto/Roboto-Medium' + FONT_EXT),
    Roboto_500Medium_Italic:  require('../assets/fonts/Roboto/Roboto-MediumItalic' + FONT_EXT),
    Roboto_700Bold:           require('../assets/fonts/Roboto/Roboto-Bold' + FONT_EXT),
    Roboto_700Bold_Italic:    require('../assets/fonts/Roboto/Roboto-BoldItalic' + FONT_EXT),
    Roboto_900Black:          require('../assets/fonts/Roboto/Roboto-Black' + FONT_EXT),
    Roboto_900Black_Italic:   require('../assets/fonts/Roboto/Roboto-BlackItalic' + FONT_EXT),

    RobotoCondensed_300Light:          require('../assets/fonts/RobotoCondensed/RobotoCondensed-Light' + FONT_EXT),
    RobotoCondensed_300Light_Italic:   require('../assets/fonts/RobotoCondensed/RobotoCondensed-LightItalic' + FONT_EXT),
    RobotoCondensed_400Regular:        require('../assets/fonts/RobotoCondensed/RobotoCondensed-Regular' + FONT_EXT),
    RobotoCondensed_400Regular_Italic: require('../assets/fonts/RobotoCondensed/RobotoCondensed-Italic' + FONT_EXT),
    RobotoCondensed_700Bold:           require('../assets/fonts/RobotoCondensed/RobotoCondensed-Bold' + FONT_EXT),
    RobotoCondensed_700Bold_Italic:    require('../assets/fonts/RobotoCondensed/RobotoCondensed-BoldItalic' + FONT_EXT),
}

export const DISPLAY = {
    fontFamily: 'RobotoCondensed_700Bold_Italic',
    fontSize: Mixins.scaleFont(42),
    minHeight: Mixins.scaleFont(44),
    textTransform: 'uppercase',
}

export const LARGE_TITLE_1 = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(40),
    minHeight: Mixins.scaleFont(44),
}

export const LARGE_TITLE_2 = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(36),
    minHeight: Mixins.scaleFont(40),
}

export const TITLE_1 = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(28),
    minHeight: Mixins.scaleFont(32),
}

export const TITLE_2 = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(24),
    minHeight: Mixins.scaleFont(28),
}

export const TITLE_3 = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(20),
    minHeight: Mixins.scaleFont(24),
}

export const HEADLINE = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(16),
    minHeight: Mixins.scaleFont(24),
}

export const BODY = {
    fontFamily: 'Roboto_400Regular',
    fontSize: Mixins.scaleFont(17),
    minHeight: Mixins.scaleFont(28),
}

export const BODY_BOLD = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(17),
    minHeight: Mixins.scaleFont(28),
}

export const CALLOUT = {
    fontFamily: 'Roboto_400Regular',
    fontSize: Mixins.scaleFont(16),
    minHeight: Mixins.scaleFont(24),
    letterSpacing: -0.32,
}

export const CALLOUT_BOLD = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(16),
    minHeight: Mixins.scaleFont(24),
    letterSpacing: -0.32,
}

export const SUBHEAD = {
    fontFamily: 'Roboto_400Regular',
    fontSize: Mixins.scaleFont(15),
    minHeight: Mixins.scaleFont(20),
    letterSpacing: -0.24,
}

export const FOOTNOTE = {
    fontFamily: 'Roboto_400Regular',
    fontSize: Mixins.scaleFont(14),
    minHeight: Mixins.scaleFont(20),
    letterSpacing: -0.08,
}

export const FOOTNOTE_BOLD = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(14),
    minHeight: Mixins.scaleFont(20),
    letterSpacing: -0.08,
}

export const CAPTION_1 = {
    fontFamily: 'Roboto_400Regular',
    fontSize: Mixins.scaleFont(12),
    minHeight: Mixins.scaleFont(16),
}

export const CAPTION_2 = {
    fontFamily: 'Roboto_400Regular',
    fontSize: Mixins.scaleFont(11),
    minHeight: Mixins.scaleFont(13),
    letterSpacing: 0.07,
}

export const BUTTON = {
    fontFamily: 'Roboto_700Bold',
    fontSize: Mixins.scaleFont(16),
    minHeight: Mixins.scaleFont(16),
    letterSpacing: 0.27,
}

export const CODE = {
    fontFamily: 'RobotoCondensed_400Regular_Italic',
    fontSize: Mixins.scaleFont(16),
    minHeight: Mixins.scaleFont(16),
}