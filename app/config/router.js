import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';;
import ProductCat from '../screens/Productcat/ProductCat';
import ProductSubCat from '../screens/Productsubcat/ProductSubCat';
import ProductList from '../screens/Product/ProductList';
import ProductDetail from '../screens/Product/ProductDetail';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '',
    },
  },
  ProductCat: {
    screen: ProductCat,
    navigationOptions: ({ navigation }) => ({
      title: 'Products',
    }),
  },
  ProductSubCat: {
    screen: ProductSubCat,
    navigationOptions: ({ navigation }) => ({
      title: 'Products',
    }),
  },
  ProductList: {
    screen: ProductList,
    navigationOptions: ({ navigation }) => ({
      title: 'Products',
    }),
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Products',
    }),
  },
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack
  },
});

export const ProductCatStack = StackNavigator({
  ProductCat: {
    screen: ProductCat,
  },
});

export const ProductSubCatStack = StackNavigator({
  ProductSubCat: {
    screen: ProductSubCat,
  },
});

export const ProductListStack = StackNavigator({
  ProductList: {
    screen: ProductList,
  },
});

export const ProductDetailStack = StackNavigator({
  ProductDetail: {
    screen: ProductDetail,
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  ProductCat: {
    screen: ProductCatStack,
  },
  ProductSubCat: {
    screen: ProductSubCatStack,
  },
  ProductList: {
    screen: ProductListStack,
  },
  ProductDetail: {
    screen: ProductDetailStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
