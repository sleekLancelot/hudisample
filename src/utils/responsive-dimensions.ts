// packages
import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
 export const widthPercentageToDP = (widthPercent: number) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
export const heightPercentageToDP = (heightPercent: number) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const hp = (height: number) => {
  return heightPercentageToDP((height / 926) * 100);
};

/**
 * correct calculation for resposive widths
 */
export const wp = (width: number) => {
  return widthPercentageToDP((width / 428) * 100);
};

export const isTablet = () => Dimensions.get('screen').width >= 768

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;