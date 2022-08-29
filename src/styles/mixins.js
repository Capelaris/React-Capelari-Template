import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = (size) => size * PixelRatio.getFontScale();

export const shadow = (level, backgroundColor) => {
	switch (level) {
		case 1:
			return boxShadow('#00537D', {width: 0, height: 6}, 6, 0.1, backgroundColor);
		case 2:
			return boxShadow('#00537D', {width: 0, height: 12}, 12, 0.1, backgroundColor);
		case 3:
			return boxShadow('#00537D', {width: 0, height: 24}, 24, 0.1, backgroundColor);
		case 4:
			return boxShadow('#00537D', {width: 0, height: 48}, 48, 0.1, backgroundColor);
	
		default:
			return boxShadow('#00537D');
	}
}

export function dimensions(top, right = top, bottom = top, left = right, property) {
	let styles = {};

	styles[`${property}Top`] = top;
	styles[`${property}Right`] = right;
	styles[`${property}Bottom`] = bottom;
	styles[`${property}Left`] = left;

	return styles;
}

export function margin(top, right, bottom, left) {
	return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left) {
	return dimensions(top, right, bottom, left, 'padding');
}

function boxShadow(
	color,
	offset = { height: 0, width: 0 },
	radius = 0,
	opacity = 0,
	backgroundColor = '#FFFFFF'
) {
	return {
		shadowColor: color,
		shadowOffset: offset,
		shadowOpacity: opacity,
		shadowRadius: radius,
		elevation: radius,
		backgroundColor: backgroundColor,
	};
}
