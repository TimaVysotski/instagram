import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

interface SizesIterface {
  baseButtonHeight?: string;
  baseButtonFontSize?: string;
  baseBorderRadius?: string;
  baseMaxHeight: number;
  baseTabBarHeight: number;
  screenHeight: number;
  screenWidth: number;
}

const sizes: SizesIterface = {
  baseButtonHeight: '50px',
  baseButtonFontSize: '18px',
  baseBorderRadius: '5px',
  baseMaxHeight: 100,
  baseTabBarHeight: 90,
  screenHeight: height,
  screenWidth: width,
};

export default sizes;
