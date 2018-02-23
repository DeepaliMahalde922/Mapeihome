import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import axios from 'axios';

class ProductSubCat extends Component {

    constructor() {
        super();
        this.state = {
            data: '',
            maincat: '',
            subcat: '',
        }

    }

    componentDidMount() {

        const { params } = this.props.navigation.state;
        let catval = params.procat;
        this.setState({ maincat: catval })

        axios.get('http://www.mapeihome.com/api/ProductCategory/GetActive/', {
            crossdomain: true
        })
            .then((response) => {
                return response.data;
            })
            .then((responseJson) => {
                this.setState({ data: responseJson })
            })
            .catch((error) => {
                //alert(error.message);
            });
    }


    _onPressButton = (value) => {
        this.props.navigation.navigate('ProductDes', {subcat: value});
    }

    render() {
        if (!this.state.maincat) return <Text>No Maincat...</Text>
        if (!this.state.data) return <Text>Loading...</Text>
        let articles = this.state.data;
        let maincatdata = this.state.maincat;

        let productsubcatData = articles.map((key, value) => (
            <View key={value}>
                {key.Name === maincatdata && (
                    <View>
                        <View>
                            <Text>{key.Name}</Text>
                        </View>
                        {
                            key.ChildProductCategories.map((key1, value1) => (
                                <TouchableHighlight onPress={() => this._onPressButton(key1.ProductCategoryID)} key={key1.Name}>
                                    <View>
                                        <Text> {key1.Name}</Text>
                                    </View>
                                </TouchableHighlight>
                            ))
                        }
                    </View>
                )}
            </View>
        ));

        return (
            <View>
                {productsubcatData}
            </View>
        );

    }
}

export default ProductSubCat;