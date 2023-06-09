import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { get } from 'lodash';
import { Button } from 'react-native-paper';
import db from '../../data/db';
import { Heading } from '../../../components/TextFormat';
import DocCard from '../../../components/DocCard';
import theme from '../../../style/theme';

export default function ConsultScreen() {
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState([]);
  const [selectEConsult, setSelectEConsult] = useState(false);
  const [selectPConsult, setSelectPConsult] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const title = get(route.params, 'title', '');

  // Setting Initial Data - Use db if All consultation or use filtered data based on title
  useEffect(() => {
    const filterData = () => {
      const refineTitle = (newTitle) => {
        const titleRef = newTitle.replace(' ', '_');
        return titleRef.toUpperCase();
      };

      const filteredDb = db.filter((item) => item.consultationStatus === refineTitle(title));
      if (!selectEConsult && !selectPConsult) {
        setInitialData(filteredDb);
        setData(filteredDb);
      }
    };

    if (title === 'All Consultations') {
      if (!selectEConsult && !selectPConsult) {
        setInitialData(db);
        setData(db);
      }
    } else filterData();
  }, [selectEConsult, selectPConsult, title]);

  // Button funtion to sort e-consultation
  const eConsult = () => {
    setSelectEConsult((prev) => !prev);
    setSelectPConsult(false);
    const filteredData = initialData.filter(
      // eslint-disable-next-line comma-dangle
      (item) => item.consultationType === 'VIDEO_CALL' || item.consultationType === 'PHONE_CALL'
    );
    setData(filteredData);
  };

  // Button funtion to sort physical consultation
  const pConsult = () => {
    setSelectPConsult((prev) => !prev);
    setSelectEConsult(false);
    const filteredData = initialData.filter((item) => item.consultationType === 'PHYSICAL');
    setData(filteredData);
  };

  // Set header title
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <Heading layoutStyle={{ paddingHorizontal: 32 }}>Consultation type:</Heading>
      {/* Buttons for E-consultation & Physical Consultation */}
      <View style={styles.buttonContainer}>
        <Button
          mode={selectEConsult ? 'contained' : 'outlined'}
          onPress={eConsult}
          style={{
            backgroundColor: selectEConsult ? theme.colors.primary : theme.colors.light,
            borderColor: theme.colors.primary,
          }}
          labelStyle={{ color: selectEConsult ? theme.colors.light : theme.colors.primary }}
        >
          E-Consultation
        </Button>
        <Button
          mode={selectPConsult ? 'contained' : 'outlined'}
          onPress={() => pConsult()}
          style={{
            backgroundColor: selectPConsult ? theme.colors.primary : theme.colors.light,
            borderColor: theme.colors.primary,
          }}
          labelStyle={{ color: selectPConsult ? theme.colors.light : theme.colors.primary }}
        >
          P-Consultation
        </Button>
      </View>

      {/* Pass data to Doc Cards */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
        {data.map((doc) => (
          <DocCard
            name={doc.doctorName}
            speciality={doc.specialization}
            imageUrl={doc.photoPath}
            type={doc.consultationType}
            status={doc.consultationStatus}
            date={doc.slotDate}
            startTime={doc.slotStartTime}
            endTime={doc.slotEndTime}
            clinicName={doc.clinicName}
            address={doc.clinicAddress}
            key={doc.doctorId}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  cardContainer: {
    paddingVertical: 16,
  },
});
