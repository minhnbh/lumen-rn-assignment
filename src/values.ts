import {ImageRequireSource} from 'react-native';
import images from './assets/images';

export const COLORS = {
  GREY_01: '#171725',
  GREY_03: '#696974',
  GREY_04: '#92929D',
  GREY_05: '#B5B5BE',
  GREY_07: '#E2E2EA',
  GREY_08: '#F1F1F5',
  GREY_09: '#FAFAFB',
  BLUE_DARK: '#0062FF',
  RED_DARK: '#FC5A5A',
  WHITE: 'white',
};

export interface ICarouselItem {
  name: string;
  data: ICarouselDataItem[];
}

export interface ICarouselDataItem {
  banner: ImageRequireSource;
  coin: number;
  description: string;
  tags?: string[];
}

export const carouselData: ICarouselItem[] = [
  {
    name: 'Petrol',
    data: [
      {
        banner: images.petrol1,
        coin: 15,
        description:
          '50% discount for every $100 top-up on your Shell Petrol Card',
      },
      {
        banner: images.petrol2,
        coin: 1000,
        description: '70% discount top-up on your Shell Petrol Card',
        tags: ['Insufficient coins'],
      },
    ],
  },
  {
    name: 'Rental Rebate',
    data: [
      {
        banner: images.rental1,
        coin: 20,
        description: 'Get $20 Rental rebate',
      },
      {
        banner: images.rental2,
        coin: 15,
        description: 'Get $500 Rental rebate',
      },
    ],
  },
  {
    name: 'Food and Beverage',
    data: [
      {
        banner: images.food1,
        coin: 25,
        description: 'NTUC Fairprice $50 Voucher',
      },
      {
        banner: images.food2,
        coin: 5,
        description: 'Free Cold Stone Sundae at any flavour!',
      },
    ],
  },
];
