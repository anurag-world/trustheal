import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Entypo';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { Heading } from '../../components/TextFormat';
import options from '../data/options';

export default function HomeScreen() {
  const [selectedItem, setSelectedItem] = useState({
    index: 0,
  });

  const navigation = useNavigation();

  // Navigate to selected consultation type
  const onSelect = (selectedType, index) => {
    if (selectedType === options[0]) {
      setSelectedItem({
        index,
      });
    } else {
      setSelectedItem({
        index,
      });
      navigation.navigate('ConsultScreen', {
        title: options[index],
      });
    }
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {/* Dropdown */}
      <View>
        <Heading layoutStyle={styles.label}>Consultation Type:</Heading>

        {/* Dropdown for consultation type */}
        <SelectDropdown
          data={options}
          buttonStyle={{
            width: '100%',
            paddingHorizontal: 0,
            backgroundColor: '#fff',
          }}
          renderCustomizedButtonChild={() => (
            <Button
              icon={() => <Icons name="chevron-thin-down" size={20} color="#8E8E8E" />}
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                width: 350,
              }}
              style={[styles.backgroundLight, styles.border, styles.dropdownStyle]}
              labelStyle={styles.dropdownLabelStyle}
            >
              {options[selectedItem.index]}
            </Button>
          )}
          defaultValue={options[0]}
          rowStyle={styles.backgroundLight}
          rowTextStyle={styles.rowTextStyle}
          dropdownStyle={{
            borderRadius: 4,
            paddingHorizontal: 8,
            backgroundColor: '#fff',
          }}
          onSelect={(selectedType, index) => onSelect(selectedType, index)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backgroundLight: {
    backgroundColor: '#fff',
  },
  border: {
    borderWidth: 1,
    borderColor: '#D6D6D6',
  },
  dropdownStyle: {
    alignItems: 'flex-start',
    paddingVertical: 4,
  },
  dropdownLabelStyle: {
    fontSize: 14,
    color: '#292929',
  },
  rowTextStyle: {
    fontSize: 14,
    textAlign: 'left',
  },
  label: {
    paddingVertical: 16,
  },
});
