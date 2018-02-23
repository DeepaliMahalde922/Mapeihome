import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';;
import ProductDetail from '../screens/Productcat/ProductDetail';
import ProductSubCat from '../screens/Productsubcat/ProductSubCat';
import ProductDes from '../screens/Product/ProductDes';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: '',
    },
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'ProductDetail',
    }),
  },
  ProductSubCat: {
    screen: ProductSubCat,
    navigationOptions: ({ navigation }) => ({
      title: 'ProductSubCat',
    }),
  },
  ProductDes: {
    screen: ProductDes,
    navigationOptions: ({ navigation }) => ({
      title: 'ProductDes',
    }),
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack
  },
});

export const ProductDetailStack = StackNavigator({
  ProductDetail: {
    screen: ProductDetail,
  },
});

export const ProductSubCatStack = StackNavigator({
  ProductSubCat: {
    screen: ProductSubCat,
  },
});

export const ProductDesStack = StackNavigator({
  ProductDes: {
    screen: ProductDes,
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  ProductDetail: {
    screen: ProductDetailStack,
  },
  ProductSubCat: {
    screen: ProductSubCatStack,
  },
  ProductDes: {
    screen: ProductDesStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
