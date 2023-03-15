import React from 'react';
import { View,Text,Slider} from 'react-native';
import { useTranslation } from 'react-i18next';
import {Switch} from 'react-native-paper';
import CacheProvider from '../../contexts/cache-context/CacheProvider';
import styles
 from './CacheSelector.style';
import CacheContext from '../../contexts/cache-context/cache-context';
import { useContext } from 'react';

const CacheSelector = () => {
    const { t } = useTranslation();
    const { cache, setCache } = useContext(CacheContext);

    const onToggleSwitch = () => {
      setCache(!cache)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('common:cacheSelector')}</Text>
    <View style={styles.switch}>
        <Text>{t('common:allowCaching')}</Text>
      <Switch value={cache}  onValueChange={onToggleSwitch} color="#ffb901" style={styles.switchButton}/>
      </View>
    </View>
  )
}

export default CacheSelector
