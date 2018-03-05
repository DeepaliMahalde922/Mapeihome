import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight, TouchableOpacity, TouchableNativeHomeback, TouchableWithoutHomeback 
} from 'react-native';

import logo from './assets/images/ardex_logo.png';
import contact from './assets/images/contact.png';
import handler_stadorte from './assets/images/handler_stadorte.png';
import materialliste from './assets/images/materialliste.png';
import product from './assets/images/product.png';
import pulse from './assets/images/pulse.png';
import rechtliche from './assets/images/rechtliche.png';
import user_arder from './assets/images/user_arder.png';
import wasserwaage from './assets/images/wasserwaage.png';

import { List, ListItem } from 'react-native-elements';

class Home extends Component {

  onPressProduct = () => {
    this.props.navigation.navigate('ProductCat');
  };
  
  render() {
    return (
      <ScrollView>
          <View style={styles.container}>
                <View style={styles.logoSect}>
                    <View>
                        <Image style={styles.logoGrid} source={logo} />
                    </View>
                </View>
          </View>

          <View style={styles.mainGrid}>

              <TouchableHighlight onPress={this.onPressProduct} underlayColor="white">
                <View style={styles.gridSect}>
                    <Image style={styles.imgGrid} source={product} />
                    <Text style={styles.textGrid}>Products & Systems</Text>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={this.onPressProduct} underlayColor="white">
                <View style={styles.gridSect}>
                    <Image style={styles.imgGrid} source={materialliste} />
                    <Text style={styles.textGrid}>Product Calculator</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.onPressProduct} underlayColor="white">
                <View style={styles.gridSect}>
                    <Image style={styles.imgGrid} source={contact} />
                    <Text style={styles.textGrid}>Technical Updates</Text>
                </View>
              </TouchableHighlight>

          </View>

          <View style={styles.mainGrid}>

              <TouchableHighlight onPress={this.onPressProduct} underlayColor="white">
                <View style={styles.gridSect}>
                    <Image style={styles.imgGrid} source={rechtliche} />
                    <Text style={styles.textGrid}>Sales Professional</Text>
                </View>
              </TouchableHighlight>

                <View style={styles.gridSectRear} style={{}}></View>

              <TouchableHighlight onPress={this.onPressProduct} underlayColor="white">
                <View style={styles.gridSect}>
                    <Image style={styles.imgGrid} source={user_arder} />
                    <Text style={styles.textGrid}>Company Information</Text>
                </View>
              </TouchableHighlight>

          </View>

          <View style={styles.mainGrid}>

              <TouchableHighlight onPress={this.onPressProduct} underlayColor="white">
                <View style={styles.gridSect}>
                    <Image style={styles.imgGrid} source={wasserwaage} />
                    <Text style={styles.textGrid}>Youtube Channel</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.onPressProduct} underlayColor="white">
                <View style={styles.gridSect}>
                    <Image style={styles.imgGrid} source={pulse} />
                    <Text style={styles.textGrid}>The Pulse</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.onPressProduct} underlayColor="white">
                <View style={styles.gridSect}>
                    <Image style={styles.imgGrid} source={handler_stadorte} />
                    <Text style={styles.textGrid}>Contact & Careers Updates</Text>
                </View>
              </TouchableHighlight>

          </View>

      </ScrollView>
    );
  }
}

export default Home;



const styles = StyleSheet.create({
    mainGrid: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    gridSectRear:{
        width: 110,
        height: 110,
        paddingTop: 10,
        backgroundColor: 'white'
    },
    gridSect: {
        width: 100,
        height: 105,
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#616870',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgGrid: {
        maxWidth: 35,
        maxHeight: 30,
        paddingTop: 40,
    },
    textGrid: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    logoGrid: {
        margin: 10,
        maxHeight: 180,
    },
    logoSect: {
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        marginBottom: 30,
    }
});