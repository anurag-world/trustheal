import React from "react";
import { Button, Card, Text, Divider } from "react-native-paper";

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
  return (
    <Card style={{ marginBottom: 20 }}>
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
        <Button>Options</Button>
        <Button>Book</Button>
      </Card.Actions>
    </Card>
  );
}
