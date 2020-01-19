  import React, { Component } from 'react';
  import { SectionList, Image, Button, StyleSheet, Text, View, ScrollView, Alert, Card, Animated, Dimensions} from 'react-native';
  const Screen_Height = Dimensions.get('window').height
  const Screen_Width = Dimensions.get('window').width

  const Users = [
    {id: "1", uri: "https://www.tadbowman.com/images/xl/stormytetons2v2.jpg" },
    {id: "2", uri: "https://www.tadbowman.com/images/xl/stormytetons2v2.jpg" },
    {id: "3", uri: "https://www.tadbowman.com/images/xl/stormytetons2v2.jpg" },
    {id: "4", uri: "https://www.tadbowman.com/images/xl/stormytetons2v2.jpg" }
  ]

  export default class SectionListBasics extends Component {
      _onPressButton() {
        alert('You tapped the button!')
      }
    render() {
      <Button
                title="Press me"
                color="#f194ff"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
              />
      return (
        <View>
        <Animated.View style = [{height:Screen_Height-120, width: Screen_Width}]>

        </Animated.View>
        <Image source={{uri: "https://www.tadbowman.com/images/xl/stormytetons2v2.jpg", width: 450, height: 200}} />
        <ScrollView>
          <SectionList
            sections={[
              {title: 'Materials Engineering', data: ['Courses','Research','Jobs']},
              {title: 'Software', data: ['Machine Learning','Webscrapping','React Native App','Github Website']},
              {title: 'Recreation', data: ['Skiing','Climbing']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
          <Button title="Press me... You Won't!!!" onPress={() => Alert.alert('Fell For it Betch')}/>
        </ScrollView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(200,200,150,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
