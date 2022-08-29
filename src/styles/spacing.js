import { Dimensions } from 'react-native';

export const HORIZONTAL_MARGIN = 20;
export const HORIZONTAL_GAP_COL = 12;
export const NUM_OF_COLS = 4;
export const BORDER_RADIUS = 4;
export const BORDER_WIDTH = 0.5;

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const COL_WIDTH = (SCREEN_WIDTH - (2 * HORIZONTAL_MARGIN) - ((NUM_OF_COLS - 1) * HORIZONTAL_GAP_COL)) / NUM_OF_COLS;

export const BR_0 = {borderRadius: 0};
export const BR_100 = {borderRadius: (BORDER_RADIUS)};
export const BR_200 = {borderRadius: (BORDER_RADIUS * 2)};
export const BR_300 = {borderRadius: (BORDER_RADIUS * 3)};
export const BR_400 = {borderRadius: (BORDER_RADIUS * 4)};
export const BR_500 = {borderRadius: (BORDER_RADIUS * 5)};
export const BR_600 = {borderRadius: (BORDER_RADIUS * 6)};
export const BR_700 = {borderRadius: (BORDER_RADIUS * 8)};
export const BR_800 = {borderRadius: (BORDER_RADIUS * 12)};
export const BR_900 = {borderRadius: (BORDER_RADIUS * 16)};

export const BR_TL_0 = {borderTopLeftRadius: 0};
export const BR_TL_100 = {borderTopLeftRadius: (BORDER_RADIUS)};
export const BR_TL_200 = {borderTopLeftRadius: (BORDER_RADIUS * 2)};
export const BR_TL_300 = {borderTopLeftRadius: (BORDER_RADIUS * 3)};
export const BR_TL_400 = {borderTopLeftRadius: (BORDER_RADIUS * 4)};
export const BR_TL_500 = {borderTopLeftRadius: (BORDER_RADIUS * 5)};
export const BR_TL_600 = {borderTopLeftRadius: (BORDER_RADIUS * 6)};
export const BR_TL_700 = {borderTopLeftRadius: (BORDER_RADIUS * 8)};
export const BR_TL_800 = {borderTopLeftRadius: (BORDER_RADIUS * 12)};
export const BR_TL_900 = {borderTopLeftRadius: (BORDER_RADIUS * 16)};

export const BR_TR_0 = {borderTopRightRadius: 0};
export const BR_TR_100 = {borderTopRightRadius: (BORDER_RADIUS)};
export const BR_TR_200 = {borderTopRightRadius: (BORDER_RADIUS * 2)};
export const BR_TR_300 = {borderTopRightRadius: (BORDER_RADIUS * 3)};
export const BR_TR_400 = {borderTopRightRadius: (BORDER_RADIUS * 4)};
export const BR_TR_500 = {borderTopRightRadius: (BORDER_RADIUS * 5)};
export const BR_TR_600 = {borderTopRightRadius: (BORDER_RADIUS * 6)};
export const BR_TR_700 = {borderTopRightRadius: (BORDER_RADIUS * 8)};
export const BR_TR_800 = {borderTopRightRadius: (BORDER_RADIUS * 12)};
export const BR_TR_900 = {borderTopRightRadius: (BORDER_RADIUS * 16)};

export const BR_BL_0 = {borderBottomLeftRadius: 0};
export const BR_BL_100 = {borderBottomLeftRadius: (BORDER_RADIUS)};
export const BR_BL_200 = {borderBottomLeftRadius: (BORDER_RADIUS * 2)};
export const BR_BL_300 = {borderBottomLeftRadius: (BORDER_RADIUS * 3)};
export const BR_BL_400 = {borderBottomLeftRadius: (BORDER_RADIUS * 4)};
export const BR_BL_500 = {borderBottomLeftRadius: (BORDER_RADIUS * 5)};
export const BR_BL_600 = {borderBottomLeftRadius: (BORDER_RADIUS * 6)};
export const BR_BL_700 = {borderBottomLeftRadius: (BORDER_RADIUS * 8)};
export const BR_BL_800 = {borderBottomLeftRadius: (BORDER_RADIUS * 12)};
export const BR_BL_900 = {borderBottomLeftRadius: (BORDER_RADIUS * 16)};

export const BR_BR_0 = {borderBottomRightRadius: 0};
export const BR_BR_100 = {borderBottomRightRadius: (BORDER_RADIUS)};
export const BR_BR_200 = {borderBottomRightRadius: (BORDER_RADIUS * 2)};
export const BR_BR_300 = {borderBottomRightRadius: (BORDER_RADIUS * 3)};
export const BR_BR_400 = {borderBottomRightRadius: (BORDER_RADIUS * 4)};
export const BR_BR_500 = {borderBottomRightRadius: (BORDER_RADIUS * 5)};
export const BR_BR_600 = {borderBottomRightRadius: (BORDER_RADIUS * 6)};
export const BR_BR_700 = {borderBottomRightRadius: (BORDER_RADIUS * 8)};
export const BR_BR_800 = {borderBottomRightRadius: (BORDER_RADIUS * 12)};
export const BR_BR_900 = {borderBottomRightRadius: (BORDER_RADIUS * 16)};

export const BW_0 = {borderWidth: 0};
export const BW_100 = {borderWidth: (BORDER_WIDTH)};
export const BW_200 = {borderWidth: (BORDER_WIDTH * 2)};
export const BW_300 = {borderWidth: (BORDER_WIDTH * 3)};
export const BW_400 = {borderWidth: (BORDER_WIDTH * 4)};
export const BW_500 = {borderWidth: (BORDER_WIDTH * 5)};
export const BW_600 = {borderWidth: (BORDER_WIDTH * 6)};
export const BW_700 = {borderWidth: (BORDER_WIDTH * 8)};
export const BW_800 = {borderWidth: (BORDER_WIDTH * 12)};
export const BW_900 = {borderWidth: (BORDER_WIDTH * 16)};

export const BW_L_0 = {borderLeftWidth: 0};
export const BW_L_100 = {borderLeftWidth: (BORDER_WIDTH)};
export const BW_L_200 = {borderLeftWidth: (BORDER_WIDTH * 2)};
export const BW_L_300 = {borderLeftWidth: (BORDER_WIDTH * 3)};
export const BW_L_400 = {borderLeftWidth: (BORDER_WIDTH * 4)};
export const BW_L_500 = {borderLeftWidth: (BORDER_WIDTH * 5)};
export const BW_L_600 = {borderLeftWidth: (BORDER_WIDTH * 6)};
export const BW_L_700 = {borderLeftWidth: (BORDER_WIDTH * 8)};
export const BW_L_800 = {borderLeftWidth: (BORDER_WIDTH * 12)};
export const BW_L_900 = {borderLeftWidth: (BORDER_WIDTH * 16)};

export const BW_R_0 = {borderRightWidth: 0};
export const BW_R_100 = {borderRightWidth: (BORDER_WIDTH)};
export const BW_R_200 = {borderRightWidth: (BORDER_WIDTH * 2)};
export const BW_R_300 = {borderRightWidth: (BORDER_WIDTH * 3)};
export const BW_R_400 = {borderRightWidth: (BORDER_WIDTH * 4)};
export const BW_R_500 = {borderRightWidth: (BORDER_WIDTH * 5)};
export const BW_R_600 = {borderRightWidth: (BORDER_WIDTH * 6)};
export const BW_R_700 = {borderRightWidth: (BORDER_WIDTH * 8)};
export const BW_R_800 = {borderRightWidth: (BORDER_WIDTH * 12)};
export const BW_R_900 = {borderRightWidth: (BORDER_WIDTH * 16)};

export const BW_T_0 = {borderTopWidth: 0};
export const BW_T_100 = {borderTopWidth: (BORDER_WIDTH)};
export const BW_T_200 = {borderTopWidth: (BORDER_WIDTH * 2)};
export const BW_T_300 = {borderTopWidth: (BORDER_WIDTH * 3)};
export const BW_T_400 = {borderTopWidth: (BORDER_WIDTH * 4)};
export const BW_T_500 = {borderTopWidth: (BORDER_WIDTH * 5)};
export const BW_T_600 = {borderTopWidth: (BORDER_WIDTH * 6)};
export const BW_T_700 = {borderTopWidth: (BORDER_WIDTH * 8)};
export const BW_T_800 = {borderTopWidth: (BORDER_WIDTH * 12)};
export const BW_T_900 = {borderTopWidth: (BORDER_WIDTH * 16)};

export const BW_B_0 = {borderBottomWidth: 0};
export const BW_B_100 = {borderBottomWidth: (BORDER_WIDTH)};
export const BW_B_200 = {borderBottomWidth: (BORDER_WIDTH * 2)};
export const BW_B_300 = {borderBottomWidth: (BORDER_WIDTH * 3)};
export const BW_B_400 = {borderBottomWidth: (BORDER_WIDTH * 4)};
export const BW_B_500 = {borderBottomWidth: (BORDER_WIDTH * 5)};
export const BW_B_600 = {borderBottomWidth: (BORDER_WIDTH * 6)};
export const BW_B_700 = {borderBottomWidth: (BORDER_WIDTH * 8)};
export const BW_B_800 = {borderBottomWidth: (BORDER_WIDTH * 12)};
export const BW_B_900 = {borderBottomWidth: (BORDER_WIDTH * 16)};

export const FLEX = {flex: 1};


export const BS_ROW = {
    paddingHorizontal: (HORIZONTAL_MARGIN - (HORIZONTAL_GAP_COL / 2)),
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
};

export const BS_COLUMN = {
    paddingVertical: (HORIZONTAL_MARGIN - (HORIZONTAL_GAP_COL / 2)),
    flexDirection: 'column',
    display: 'flex',
}

export const BS_COL_0_5 = {
    width: ((COL_WIDTH - HORIZONTAL_GAP_COL) / 2),
    margin: (HORIZONTAL_GAP_COL / 2),
};

export const BS_COL_1 = {
    width: COL_WIDTH,
    margin: (HORIZONTAL_GAP_COL / 2),
};

export const BS_COL_2 = {
    width: (COL_WIDTH * 2) + (HORIZONTAL_GAP_COL),
    margin: (HORIZONTAL_GAP_COL / 2),
};

export const BS_COL_3 = {
    width: (COL_WIDTH * 3) + (HORIZONTAL_GAP_COL * 2),
    margin: (HORIZONTAL_GAP_COL / 2),
};

export const BS_COL_4 = {
    width: (COL_WIDTH * 4) + (HORIZONTAL_GAP_COL * 3),
    margin: (HORIZONTAL_GAP_COL / 2),
};