import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import axios from 'axios';

class ProductDetail extends Component {

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
        let productcatData = articles.map((key, value) => {
            return(     
                <TouchableHighlight onPress={() => this._onPressButton(key.Name)} key={key.Name}>
                    <View><Text> {key.Name}</Text></View>
                </TouchableHighlight>
            )
        });
        
        return (
            <View>
                {productcatData}
            </View>
        );

    }
}

export default ProductDetail;