import { DefaultTheme } from "@react-navigation/native";
import * as Spacing from './spacing';

export const STATUS_BAR_STYLE = 'dark';
export const BACKGROUND_COLOR = '#E9E9E9';
export const DEFAULT_TEXT_COLOR = '#001018';
export const WHITE = '#FFFFFF';
export const PRIMARY = '#2F3C68';
export const PRIMARY_DARK = '#0C0F18';
export const PRIMARY_LIGHT = '#3D508F';
export const DEFAULT_BORDER_COLOR = '#32343C';
export const SUCCESS = '#198754';
export const DANGER = '#dc3545';
export const WARNING = '#ffc107';
export const INFO = '#0dcaf0';
export const LIGHT = '#f8f9fa';
export const DARK = '#212529';
export const BLACK = '#000000';
export const GRAY_90 = '#191919';
export const GRAY_80 = '#333333';
export const GRAY_70 = '#4d4d4d';
export const GRAY_60 = '#666666';
export const GRAY_50 = '#808080';
export const GRAY_40 = '#999999';
export const GRAY_30 = '#b3b3b3';
export const GRAY_20 = '#cccccc';
export const GRAY_10 = '#E6E6E6';
export const FACEBOOK_COLOR = '#3B5998';
export const FACEBOOK_COLOR_DARK = '#273C69';

export const BC_DEFAULT = {borderColor: DEFAULT_BORDER_COLOR};
export const BC_PRIMARY = {borderColor: PRIMARY};
export const BC_PRIMARY_DARK = {borderColor: PRIMARY_DARK};
export const BC_PRIMARY_LIGHT = {borderColor: PRIMARY_LIGHT};
export const BC_SUCCESS = {borderColor: SUCCESS};
export const BC_DANGER = {borderColor: DANGER};
export const BC_WARNING = {borderColor: WARNING};
export const BC_INFO = {borderColor: INFO};
export const BC_LIGHT = {borderColor: LIGHT};
export const BC_DARK = {borderColor: DARK};

export const BACK_DEFAULT = {backgroundColor: BACKGROUND_COLOR};
export const BACK_PRIMARY = {backgroundColor: PRIMARY};
export const BACK_PRIMARY_DARK = {backgroundColor: PRIMARY_DARK};
export const BACK_PRIMARY_LIGHT = {backgroundColor: PRIMARY_LIGHT};
export const BACK_SUCCESS = {backgroundColor: SUCCESS};
export const BACK_DANGER = {backgroundColor: DANGER};
export const BACK_WARNING = {backgroundColor: WARNING};
export const BACK_INFO = {backgroundColor: INFO};
export const BACK_LIGHT = {backgroundColor: LIGHT};
export const BACK_DARK = {backgroundColor: DARK};

export const COMPONENTS = {
    navigation: {
        theme: {
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                primary: PRIMARY,
                background: BACKGROUND_COLOR,
            },
        }
    },
    label: {
        enabled: {
            color: DEFAULT_TEXT_COLOR,
            opacity: 1,
        },
        disabled: {
            color: DEFAULT_TEXT_COLOR,
            opacity: 0.38,
        },
    },
    inputText: {
        enabled: {
            backgroundColor: BACKGROUND_COLOR,
            borderColor: DEFAULT_BORDER_COLOR,
            color: DEFAULT_TEXT_COLOR,
            opacity: 1,
        },
        disabled: {
            backgroundColor: BACKGROUND_COLOR,
            borderColor: DEFAULT_BORDER_COLOR,
            color: DEFAULT_TEXT_COLOR,
            opacity: 0.38,
        },
    },
    button: {
        primary: {
            backgroundColor: PRIMARY,
            pressBackground: PRIMARY_DARK,
            color: WHITE,
        },
        primaryReserved: {
            backgroundColor: WHITE,
            pressBackground: WHITE,
            color: DEFAULT_TEXT_COLOR,
        },
        secondary: {
            backgroundColor: WHITE,
            pressBackground: PRIMARY_LIGHT,
            color: PRIMARY,
            borderColor: DEFAULT_BORDER_COLOR,
            ...Spacing.BW_200,
        },
        enabled: {
            opacity: 1,
        }, 
        disabled: {
            opacity: 0.38,
        },
    },
    socialButton: {
        apple: {
            ...{
                backgroundColor: BLACK,
                pressBackground: GRAY_80,
                color: WHITE,
                borderColor: BLACK,
            },
            ...Spacing.BW_200,
            ...Spacing.BR_200,
        },
        facebook: {
            ...{
                backgroundColor: FACEBOOK_COLOR,
                pressBackground: FACEBOOK_COLOR_DARK,
                color: WHITE,
                borderColor: FACEBOOK_COLOR_DARK,
            },
            ...Spacing.BW_200,
            ...Spacing.BR_200,
        },
        google: {
            ...{
                backgroundColor: WHITE,
                pressBackground: GRAY_10,
                color: WHITE,
                borderColor: GRAY_10,
            },
            ...Spacing.BW_200,
            ...Spacing.BR_200,
        },
        enabled: {
            opacity: 1,
        }, 
        disabled: {
            opacity: 0.38,
        },
    },
    card: {
        style: {
            backgroundColor: WHITE,
            pressBackground: GRAY_10,
        },
        enabled: {
            opacity: 1,
        },
        disabled: {
            opacity: 0.38,
        },
    },
    link: {
        style: {
            color: PRIMARY,
            textDecorationLine: 'underline',
        },
        enabled: {
            opacity: 1,
        },
        disabled: {
            opacity: 0.38,
        },
    },
    code: {
        style: {
            ...{
                padding: 15,
                backgroundColor: GRAY_30,
                borderColor: GRAY_50,
            },
            ...Spacing.BW_200,
            ...Spacing.BR_200,
        },
    },
}