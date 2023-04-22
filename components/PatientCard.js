import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, Divider } from 'react-native-paper';
import PropTypes from 'prop-types';
import theme from '../style/theme';

export default function PatientCard({
  imageUrl,
  name,
  speciality,
  type,
  patientName,
  date,
  startTime,
  endTime,
  clinicName,
  address,
}) {
  return (
    <Card style={styles.cardContainer}>
      <Card.Content
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 16,
        }}
      >
        <Card.Content
          style={{
            flexGrow: 1,
            alignItems: 'center',
          }}
        >
          {/* Doctor Name */}
          <Text variant="titleLarge" style={{ color: theme.colors.text.header }}>
            {name}
          </Text>

          {/* Specialization */}
          {speciality.map((sp) => (
            <Text variant="labelLarge" style={{ color: theme.colors.text.header }} key={sp}>
              {sp}
            </Text>
          ))}
        </Card.Content>

        {/* Image */}
        <Card.Cover
          source={{ uri: imageUrl }}
          style={{ width: 100, height: 120 }}
          resizeMethod="auto"
        />
      </Card.Content>
      <Divider horizontalInset bold />
      <Card.Content style={{ paddingTop: 20, flexShrink: 1 }}>
        {/* Patient Name */}
        {patientName && (
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.text.dark }}
          >{`Patient Name: ${patientName}`}</Text>
        )}

        {/* Clinic Name */}
        {clinicName && (
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.text.dark }}
          >{`Clinic: ${clinicName}`}</Text>
        )}

        {/* Consultation Type */}
        <Text
          variant="labelLarge"
          style={{ color: theme.colors.text.dark }}
        >{`Consultation Type: ${type.replaceAll('_', ' ')}`}</Text>

        {/* Physical Address */}
        {address && (
          <Text
            variant="bodyMedium"
            style={{ color: theme.colors.text.dark }}
          >{`Physical Address: ${address}`}</Text>
        )}

        {/* Slot Details */}
        <Text variant="titleMedium" style={{ paddingTop: 16, color: theme.colors.text.dark }}>
          Slot Details:
        </Text>

        {/* Date */}
        <Text
          variant="bodyMedium"
          style={{ color: theme.colors.text.dark }}
        >{`Date: ${date}`}</Text>

        {/* Start Time */}
        <Text
          variant="bodyMedium"
          style={{ color: theme.colors.text.dark }}
        >{`Start Time: ${startTime}`}</Text>

        {/* End Time */}
        <Text
          variant="bodyMedium"
          style={{ color: theme.colors.text.dark }}
        >{`End Time: ${endTime}`}</Text>
      </Card.Content>
      <Card.Actions style={{ padding: 16 }}>
        <Button
          mode="outlined"
          style={{ marginRight: 8, borderColor: theme.colors.primary }}
          labelStyle={{ color: theme.colors.primary }}
        >
          Options
        </Button>
        <Button
          style={{ backgroundColor: theme.colors.primary }}
          labelStyle={{ color: theme.colors.text.light }}
        >
          Book
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.secondary,
    marginBottom: 20,
    zIndex: -1,
  },
});

PatientCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  patientName: PropTypes.string,
  speciality: PropTypes.oneOfType([PropTypes.array]),
  type: PropTypes.string,
  date: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  clinicName: PropTypes.string,
  address: PropTypes.string,
};

PatientCard.defaultProps = {
  imageUrl: '',
  name: '',
  patientName: '',
  speciality: [],
  type: '',
  date: '',
  startTime: '',
  endTime: '',
  clinicName: '',
  address: '',
};
