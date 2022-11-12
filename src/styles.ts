import {StyleSheet} from 'react-native';
import {COLORS} from './values';

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: COLORS.GREY_01,
    padding: 24,
    paddingBottom: 200,
    paddingTop: 48,
  },
  backBtnContainer: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  availableCoinContainer: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.GREY_09,
    borderRadius: 8,
    padding: 24,
    marginTop: -160,
    marginHorizontal: 16,
  },
  availableCoin: {
    fontSize: 48,
    color: COLORS.GREY_01,
    letterSpacing: -0.5,
  },
  slider: {
    height: 5,
    backgroundColor: COLORS.GREY_07,
    borderRadius: 25,
    marginTop: 24,
  },
  activeSlider: {
    height: 5,
    backgroundColor: COLORS.BLUE_DARK,
    borderRadius: 25,
    width: '60%',
  },
  myCouponBtn: {
    backgroundColor: COLORS.GREY_01,
    borderRadius: 4,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  carouselItem: {
    width: '100%',
  },
  carouselContent: {
    borderWidth: 1,
    borderColor: COLORS.GREY_08,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: 'rgba(23, 23, 37, 0.04)',
    shadowOpacity: 1,
  },
  carouselItemImage: {
    width: '100%',
    height: 98,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  carouselItemDescription: {
    letterSpacing: -0.005,
    fontSize: 16,
    color: COLORS.GREY_04,
    lineHeight: 24,
  },
});

export default styles;
