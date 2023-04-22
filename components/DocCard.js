import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  Card,
  Text,
  Divider,
  Menu,
  Provider,
} from "react-native-paper";
import optionsList from "../src/data/optionsList";

export default function DocCard({
  imageUrl,
  name,
  speciality,
  type,
  status,
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
      <Card style={{ marginBottom: 20, zIndex: -1 }}>
        <Card.Content
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 16,
          }}
        >
          <Card.Content
            style={{
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <Text variant="titleLarge">{name}</Text>
            {speciality.map((sp) => (
              <Text variant="labelLarge" key={sp}>
                {sp}
              </Text>
            ))}
          </Card.Content>
          <Card.Cover
            source={{ uri: imageUrl }}
            style={{ width: 100, height: 120 }}
            resizeMethod="auto"
          />
        </Card.Content>
        <Divider horizontalInset bold />
        <Card.Content style={{ paddingTop: 20, flexShrink: 1 }}>
          {clinicName && (
            <Text variant="titleMedium">{`Clinic: ${clinicName}`}</Text>
          )}
          <Text variant="labelLarge">{`Consultation Type: ${type.replaceAll(
            "_",
            " "
          )}`}</Text>
          {/* <Text variant="labelLarge">{`Consultation Status: ${status}`}</Text> */}
          {address && (
            <Text variant="bodyMedium">{`Physical Address: ${address}`}</Text>
          )}
          <Text variant="titleMedium" style={{ paddingTop: 16 }}>
            Slot Details:
          </Text>
          <Text variant="bodyMedium">{`Date: ${date}`}</Text>
          <Text variant="bodyMedium">{`Start Time: ${startTime}`}</Text>
          <Text variant="bodyMedium">{`End Time: ${endTime}`}</Text>
        </Card.Content>
        <Card.Actions style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
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
                  style={{ marginRight: 8 }}
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
          <Button>Book</Button>
        </Card.Actions>
      </Card>
    </Provider>
  );
}
