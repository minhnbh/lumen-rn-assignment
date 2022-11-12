import React from 'react';
import Header from './Header';
import Carousel from 'react-native-snap-carousel';
import {carouselData, COLORS, ICarouselDataItem} from './values';
import {Dimensions, Image, ScrollView} from 'react-native';
import View from './components/View';
import Text from './components/Text';
import styles from './styles';
import imageIcon from './assets/icons';

const Container = () => {
  const renderCarouselItemView = (item: ICarouselDataItem) => {
    return (
      <View paddingLeft={24} marginTop={24} style={styles.carouselItem}>
        <Image source={item.banner} style={styles.carouselItemImage} />
        <View padding={16} bg="white" style={styles.carouselContent}>
          <View flexD="row" alignItems="center">
            {item.coin >= 1000 && <Image source={imageIcon.l} />}
            <View marginLeft={item.coin >= 1000 ? 4 : 0}>
              <Text
                color={item.coin < 1000 ? COLORS.BLUE_DARK : COLORS.GREY_03}
                fontSize={16}
                fontWeight={600}
                lineHeight={24}>
                {`${item.coin} Coin${item.coin > 1 ? 's' : ''}`}
              </Text>
            </View>
          </View>
          <Text style={styles.carouselItemDescription}>{item.description}</Text>
          {item.tags && (
            <View marginTop={8}>
              {item.tags.map(tag => (
                <Text key={`tag_${tag}`} color={COLORS.BLUE_DARK}>
                  {tag}
                </Text>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <Header />
      {carouselData.map((e, i) => (
        <View
          key={`carousel_${e.name}_${i}`}
          paddingBottom={i === carouselData.length - 1 ? 30 : 0}>
          <View marginLeft={24} marginTop={i > 0 ? 48 : 24}>
            <Text color={COLORS.GREY_01} fontSize={18} fontWeight={600}>
              {e.name}
            </Text>
          </View>
          <Carousel
            loop={true}
            activeSlideAlignment="start"
            vertical={false}
            data={e.data}
            itemWidth={(Dimensions.get('screen').width / 3) * 2}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            sliderWidth={Dimensions.get('screen').width}
            renderItem={({item}: {item: ICarouselDataItem}) =>
              renderCarouselItemView(item)
            }
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Container;
