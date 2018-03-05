import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import axios from 'axios';

class ProductList extends Component {

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

        axios.get('http://www.mapeihome.com/api/ProductCategory/GetByProductCategoryIDActive/'+catval, {
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

    _onPressButton = (catId, ProductID) => {

        let selectItems = {
            'catid': catId,
            'productid': ProductID
        }
        this.props.navigation.navigate('ProductDetail', {product: selectItems });
    }
    

    render() {
        
        if (!this.state.curcat) return <Text>No Maincat...</Text>
        if (!this.state.data) return <Text>Loading...</Text>

        let articles = this.state.data;
        let testData = 'ChildProductCategories';
        let productCat = this.state.curcat;

        temp_config = {}
        mainarr = []
        
        let productsubcatData = Object.keys(articles).map((key, value) => (
            <View key={value}>

                {key === testData && (
                    <View>

                        {
                            articles[key].map((catItem, catIndex) => (
                                <View key={catIndex}>

                                    {catItem.ProductCategoryID === productCat && (
                                        <View>

                                            <View>
                                                <Text> {catItem.Name} </Text>
                                            </View>

                                            <ScrollView>
                                                <List>
                                                {
                                                    catItem.Products.map((InnerItem, InnerIndex) => (

                                                        <View key={InnerIndex}>
                                                            {
                                                                InnerItem.ProductImages.map((ImageItem, ImageIndex) => (
                                                                    
                                                                    <View key={ImageIndex}>

                                                                        <ListItem
                                                                            key={ImageIndex}
                                                                            roundAvatar
                                                                            avatar={{ uri: ImageItem.ImageURL }}
                                                                            title={InnerItem.Name}
                                                                            onPress={() => this._onPressButton(productCat, InnerItem.ProductID)}
                                                                        />

                                                                    </View>

                                                                ))
                                                            }
                                                        </View>
                                                        
                                                    ))
                                                }
                                                </List>
                                            </ScrollView>

                                        </View>
                                    )}

                                </View>
                            ))
                        }

                    </View>
                )}

            </View>
        ));

        return (
            <View>{productsubcatData}</View>
        ); 

    }
}

export default ProductList;