import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/constant-data';
import HeaderButton from '../components/HeaderButton'
import TouchableComponent from '../components/TouchableCmp'
import Colors from '../constants/Colors';

const CategoriesScreen = props => {
    const renderTouchItem = (itemData) => {
        return (
            <TouchableComponent
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={() => {
                    props.navigation.navigate('ChatRoom', {
                        categoryId: itemData.item.id,
                        categoryTitle: itemData.item.title
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.viewport}>
            <FlatList
                keyExtractor={item => item.id}
                data={CATEGORIES}
                renderItem={renderTouchItem}
                numColumns={2}
            />
        </View>
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Sport Categories',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    viewport: {
        flex: 1,
        backgroundColor: Colors.primary
    }
})

export default CategoriesScreen
