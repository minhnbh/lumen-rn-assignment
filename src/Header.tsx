import React from 'react';
import styles from './styles';
import Text from './components/Text';
import {COLORS} from './values';
import View from './components/View';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Button from './components/Button';
import {ImageBackground} from 'react-native';
import images from './assets/images';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <View style={styles.header}>
        <Button style={styles.backBtnContainer}>
          <FaIcon name="chevron-left" size={16} />
        </Button>
        <View marginTop={16}>
          <Text color={COLORS.WHITE} fontSize={32} fontWeight={600}>
            Silver Tier
          </Text>
        </View>
        <View marginTop={8}>
          <Text color={COLORS.WHITE} fontSize={16} lineHeight={24}>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </Text>
        </View>
      </View>

      <View style={styles.availableCoinContainer}>
        <ImageBackground source={images.bg}>
          <Text fontSize={14} fontWeight={600} color={COLORS.GREY_05}>
            Available Coin balance
          </Text>
          <View marginTop={8}>
            <Text style={styles.availableCoin}>340</Text>
          </View>
          <View style={styles.slider}>
            <View style={styles.activeSlider} />
          </View>
          <View marginTop={24}>
            <Text color={COLORS.GREY_04} fontSize={16} lineHeight={24}>
              You have paid rental fee for $1,200. Pay more $800 to achieve Gold
              Tier.
            </Text>
          </View>
          <View marginTop={16}>
            <Button>
              <Text fontSize={16} color={COLORS.BLUE_DARK}>
                View tier benefits
              </Text>
              <View marginLeft={4}>
                <FaIcon
                  name="chevron-right"
                  color={COLORS.BLUE_DARK}
                  size={16}
                />
              </View>
            </Button>
          </View>
          <Button style={styles.myCouponBtn}>
            <Text color="white" fontWeight={600} fontSize={18}>
              My Coupons
            </Text>
          </Button>
          <View marginTop={16}>
            <Text center color={COLORS.GREY_05}>
              Updated : 02/11/2021
            </Text>
          </View>
        </ImageBackground>
      </View>
    </React.Fragment>
  );
};

export default Header;
