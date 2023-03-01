import React, { useState, useEffect} from 'react'
import { View,Text, ScrollView,Linking,TouchableOpacity} from 'react-native'
import { Searchbar,Card,Title, Paragraph,Headline} from 'react-native-paper';
import { getNewsData } from '../../api/services/news-service';
import { getCountryData } from '../../api/services/countries-service';

import styles from './NewsScreen.style'
import Spinner from '../../components/spinner/Spinner';

const NewsScreen = () => {
  const [code,setCode]=useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsArr,setNewsArr]=useState([]);

  const onChangeSearch = async(query) => {
    setNewsArr([])
    setSearchQuery(query)
    const response=await getCountryData(query);
    const responseData=await response.json();
    if(responseData.status===404){
      return;
    }
    
  try{
    
    setCode(responseData[0].cca2)
  }
  catch(ex){

     }

  }
  const fetchData = async () => {
    setNewsArr([])
    if(code!==""){
    const response = await getNewsData(code);
    const json = await response.json();
    if(json.status!=="error"){
    setNewsArr(json.articles);
    }
  }
  };

  useEffect(() => {
    fetchData();
  }, [code]);

  return (
  <View style={styles.container}>
    <Searchbar
      placeholder="Enter country"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    />
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
  {(searchQuery!=="" && newsArr.length===0)&&(<Spinner/>)}
  {newsArr.map(elem=>(<View key={elem.title}><Card style={{ backgroundColor: '#ffb901' }}>
  <Card.Content>
    <Text style={styles.capitalCity}>{elem.title}</Text>
    <Paragraph/>
    <Text style={styles.link}
      onPress={() => Linking.openURL(elem.url)}>
  Read article
</Text>
  <Paragraph/>
  </Card.Content>
</Card>
<Paragraph></Paragraph>
</View>
))}
  </ScrollView>
  </View>
  
  )
}

export default NewsScreen;
