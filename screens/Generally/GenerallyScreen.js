import React from 'react'
import { View,Text} from 'react-native'
import { Searchbar,Card,Title, Paragraph} from 'react-native-paper';
import { getCountryData } from '../../api/services/countries-service';
import Spinner from '../../components/spinner/Spinner';
import styles from "./GenerallyScreen.style.js"
import { Image } from "react-native"
const GenerallyScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [capitalCity,setCapitalCity]=React.useState('');
  const [flag,setFlag]=React.useState('');
  const [population,setPopulation]=React.useState('');
  const [area,setArea]=React.useState('');

  const onChangeSearch = async(query) => {
    setCapitalCity("")
    setFlag("")
    setPopulation("")
    setArea("")
    setSearchQuery(query);
    const response=await getCountryData(query);
    const responseData=await response.json();
    if(responseData.status===404){
      return;
    }
    try{
    setCapitalCity(responseData[0].capital[0])
    setFlag(responseData[0].flags.png)
    setPopulation(responseData[0].population)
    setArea(responseData[0].area)
    }
    catch(ex){

    }
  }

  return (
    <View style={styles.container}>
    <Searchbar
      placeholder="Enter country"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    />
     <View style={styles.content}>
     {(searchQuery!=="" &&(capitalCity==="" || flag===""))&&(<Spinner/>)}
      {(capitalCity!=="" && flag!=="") && (<Card>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Card.Content>
      <Title style={styles.capitalCity}>Capital city:{capitalCity}</Title>
      <Paragraph/>
    <Image source={{ uri: flag }} style={styles.img} />
    <Paragraph/>
    <Text>Population:{population}</Text>
    <Text>Area:{area}</Text>
    </Card.Content>
    </View>
  </Card>)}
    </View>
  </View>
  )
}

export default GenerallyScreen;
