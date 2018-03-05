import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import axios from 'axios';

class ProductCat extends Component {

    constructor(){
        super();
        this.state = {
            data: '',
            procat: '',
        }

    }

    componentDidMount(){
        axios.get('http://www.mapeihome.com/api/ProductCategory/GetActive/', {
          crossdomain: true
        })
        .then((response) => {
            return response.data;
        })
        .then((responseJson) =>{
            this.setState({ data: responseJson })
        })
        .catch((error) =>{
            //alert(error.message);
        });
    }


    _onPressButton = (value) => {
        this.props.navigation.navigate('ProductSubCat', {procat: value});
    }

    render() {

        if(!this.state.data) return  <Text>Loading1...</Text>
        let articles = this.state.data;
        let productcatData = articles.map((item, index) => {
            return(
                <ListItem
                    key={index}
                    roundAvatar
                    avatar={{ uri: item.Image }}
                    title={item.Name}
                    onPress={() => this._onPressButton(item.Name)}
                />
            )
        });
        
        return (
            <View>
                <View><Text>Product Categories</Text></View>
                <ScrollView>
                    <List>
                        <View>{productcatData}</View>
                    </List>
                </ScrollView>
            </View>
        );

    }
}

export default ProductCat;