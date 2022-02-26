import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  RowImg,
  RefreshControl,
} from 'react-native';
export default function Home({navigation}) {
  const [myList, setMyList] = useState([]);
  const [Refreshing, setRefreshing] = useState(false);

  function onRefresh() {
    setRefreshing(true);
    setRefreshing(false);
  }
  function getImgFromApi() {
    fetch(
      'https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=2f6fa24ca89ead750496e1e1268cb7b7&user_id=95572727%40N00&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=20&page=1&format=json&nojsoncallback=1',
      {method: 'GET'},
    )
      .then(response => response.json())
      .then(json => {
        // setMyList(json.photos.photo);
        // console.log(myList.length);
        // return json.movies;
        console.log(JSON.stringify(json));
      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(getImgFromApi, []);
  return (
    <View>
      <Text
        onPress={() => {
          fetch(
            'https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=2f6fa24ca89ead750496e1e1268cb7b7&user_id=95572727%40N00&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=20&page=1&format=json&nojsoncallback=1',
            {method: 'GET'},
          )
            .then(response => response.json())
            .then(json => {
              // setMyList(json.photos.photo);
              // console.log(myList.length);
              // return json.movies;
              console.log(JSON.stringify(json));
            })
            .catch(error => {
              console.error(error);
            });
          console.log('aaaaaa');
        }}>
        aaaaaaaaaaaa
      </Text>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }
        style={{flexGrow: 0}}
        numColumns={2}
        data={myList}
        renderItem={({item, index}) => {
          return (
            <RowImg
              source={item.url_z}
              views={item.views}
              key={index}
              url_z={item.url_z}
              width={item.width_z}
              height={item.height_z}
              onPress={() => navigation.navigate('Photo', {imageData: item})}
            />
          );
        }}
        onEndReached={() => {
          getImgFromApi();
          setRefreshing(true);
          setTimeout(() => {
            setPerPage(per_page => per_page + 20);
            setRefreshing(false);
          }, 500);
        }}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000a12',
  },
});
