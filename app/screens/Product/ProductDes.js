import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import axios from 'axios';

class ProductDes extends Component {

    constructor() {
        super();
        this.state = {
            data: '',
            curcat: '',
        }

    }

    componentDidMount() {

        const { params } = this.props.navigation.state;
        let catval = params.subcat;
        this.setState({ curcat: catval })

       /*  axios.get('http://www.mapeihome.com/api/ProductCategory/GetActive/', {
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
            }); */
    }


    _onPressButton = (value) => {
        this.props.navigation.navigate('ProductDes', {subcat: value});
    }

    render() {
        if (!this.state.curcat) return <Text>No ProductCat...</Text>
        
        let subcatdata = this.state.curcat;

       /*  let productData = articles.map((key, value) => (
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
        )); */

        return (
            <View>
                {subcatdata}
            </View>
        );

    }
}

export default ProductDes;