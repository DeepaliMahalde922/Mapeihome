import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import axios from 'axios';

class ProductDetail extends Component {

    constructor() {
        super();
        this.state = {
            data: '',
            catId: '',
            proId: '',
        }

    }

    componentDidMount() {

        const { params } = this.props.navigation.state;
        let catval = params.product;
        let catid ='';
        let proid ='';

        Object.keys(catval).forEach(function(key) {
            if(key == 'catid'){
                catid = catval[key]
            }
            if(key == 'productid'){
                proid = catval[key]
            }
        });
        this.setState({ proId: proid })
        this.setState({ catId: catid })

        axios.get('http://www.mapeihome.com/api/ProductCategory/GetByProductCategoryIDActive/'+catid, {
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
    

    render() {

        if (!this.state.proId) return <Text>Loading....</Text>
        if (!this.state.data) return <Text>Loading...</Text>
        let proIds = this.state.proId;
        let catIds = this.state.catId;
        let articles = this.state.data;
        let testData = 'ChildProductCategories';
        
        let productsubcatData = Object.keys(articles).map((key, value) => (
            <View key={value}>

                {key === testData && (
                    <View>
                        {
                            articles[key].map((catItem, catIndex) => (
                                <View key={catIndex}>

                                    {catItem.ProductCategoryID === catIds && (
                                        <View>

                                            {
                                                catItem.Products.map((InnerItem, InnerIndex) => (
                                                    
                                                    <View key={InnerIndex}>
                                                    
                                                        {InnerItem.ProductID === proIds && (

                                                            <View>
                                                                <View>
                                                                    
                                                                    <View><Text> {InnerItem.Name}</Text></View>
                                                                    <View><Text> {InnerItem.TagLine}</Text></View>
                                                                    <View><Text> Description: {InnerItem.Description}</Text></View>
                                                                    <View><Image style={{width: 50, height: 50}} source={{uri: InnerItem.DisplayImage}} /></View>
                                                                    
                                                                </View>
                                                            </View>
                                                            
                                                        )}

                                                    </View>

                                                ))
                                            }

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

export default ProductDetail;