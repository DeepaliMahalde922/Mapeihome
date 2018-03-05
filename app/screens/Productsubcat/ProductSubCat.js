import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
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
        this.props.navigation.navigate('ProductList', {subcat: value});
    }

    render() {
        if (!this.state.maincat) return <Text>No Maincat...</Text>
        if (!this.state.data) return <Text>Loading...</Text>
        let articles = this.state.data;
        let maincatdata = this.state.maincat;

        let productsubcatData = articles.map((item, index) => (
            <View key={index}>
                {item.Name === maincatdata && (
                    <View>
                        <View>
                            <Text>{item.Name}</Text>
                        </View>

                        <ScrollView>
                            <List>

                                {
                                    item.ChildProductCategories.map((innerItem, innerIndex) => (
                                        <ListItem
                                            key={innerIndex}
                                            roundAvatar
                                            avatar={{ uri: innerItem.Image }}
                                            title={innerItem.Name}
                                            onPress={() => this._onPressButton(innerItem.ProductCategoryID)}
                                        />

                                    ))
                                }

                            </List>
                        </ScrollView>
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