import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Card, Text, Divider, Menu, Provider } from 'react-native-paper';
import optionsList from '../src/data/optionsList';
import theme from '../style/theme';

export default function DocCard({
  imageUrl,
  name,
  speciality,
  type,
  date,
  startTime,
  endTime,
  clinicName,
  address,
}) {
  const [visible, setVisible] = useState(false); // Set sort menu visibility

  // Open or Close Menu
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Provider>
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
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              style={{ marginTop: -40, zIndex: 1000 }}
              anchor={
                <Button
                  mode="outlined"
                  onPress={openMenu}
                  style={{ marginRight: 8, borderColor: theme.colors.primary }}
                  labelStyle={{ color: theme.colors.primary }}
                >
                  Options
                </Button>
              }
            >
              {optionsList.map((item) => (
                <Menu.Item onPress={() => {}} title={item} key={item} />
              ))}
            </Menu>
          </View>
          <Button
            style={{ backgroundColor: theme.colors.primary }}
            labelStyle={{ color: theme.colors.text.light }}
          >
            Book
          </Button>
        </Card.Actions>
      </Card>
    </Provider>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.secondary,
    marginBottom: 20,
    zIndex: -1,
  },
});

DocCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  speciality: PropTypes.oneOfType([PropTypes.array]),
  type: PropTypes.string,
  date: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  clinicName: PropTypes.string,
  address: PropTypes.string,
};

DocCard.defaultProps = {
  imageUrl: '',
  name: '',
  speciality: [],
  type: '',
  date: '',
  startTime: '',
  endTime: '',
  clinicName: '',
  address: '',
};
