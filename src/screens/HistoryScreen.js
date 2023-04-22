import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";
import { SearchBar } from "@rneui/themed";
import { isEmpty } from "lodash";
import db from "../data/db";
import PatientCard from "../../components/PatientCard";
import sortList from "../data/sortList";

export default function HistoryScreen() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [sortVisible, setSortVisible] = useState(false);

  const openSortMenu = () => setSortVisible(true);
  const closeSortMenu = () => setSortVisible(false);

  useEffect(() => {
    setData(db);
  }, []);

  const onSearch = (val) => {
    const searchFilter = db.filter((item) => item.patientName.includes(val));
    if (!isEmpty(searchFilter)) setData(searchFilter);
    else setData([]);
    setSearch(val);
  };

  const onSort = (val) => {
    let sorted;
    switch (val) {
      case 1:
        sorted = data.sort((a, b) =>
          a.patientName.localeCompare(b.patientName)
        );
        break;
      case 2:
        sorted = data.sort((a, b) =>
          b.patientName.localeCompare(a.patientName)
        );
        break;
      case 3:
        sorted = data.sort((a, b) => a.slotDate.localeCompare(b.slotDate));
        break;
      case 4:
        sorted = data.sort((a, b) => b.slotDate.localeCompare(a.slotDate));
        break;
      case 5:
        sorted = data.sort((a, b) =>
          a.slotStartTime.localeCompare(b.slotStartTime)
        );
        break;
    }

    setData(sorted);
    closeSortMenu();
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View>
          <SearchBar
            placeholder="Search Here..."
            lightTheme
            round
            value={search}
            onChangeText={(text) => onSearch(text)}
            autoCorrect={false}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.containerStyle}
            leftIconContainerStyle={styles.leftIconContainerStyle}
            onClear={() => setSearch("")}
          />
          <View
            style={{
              paddingTop: 16,
              flexDirection: "row",
            }}
          >
            <Menu
              visible={sortVisible}
              onDismiss={closeSortMenu}
              style={{ marginTop: -40 }}
              anchor={
                <Button
                  mode="outlined"
                  onPress={openSortMenu}
                  style={{ marginRight: 8 }}
                >
                  Sort
                </Button>
              }
            >
              {sortList.map((item) => (
                <Menu.Item
                  onPress={() => onSort(item.value)}
                  title={item.label}
                  key={item.value}
                />
              ))}
            </Menu>
          </View>
        </View>
        <FlatList
          data={data}
          contentContainerStyle={styles.scrollContainer}
          renderItem={({ item }) => (
            <PatientCard
              name={item.doctorName}
              speciality={item.specialization}
              imageUrl={item.photoPath}
              type={item.consultationType}
              status={item.consultationStatus}
              date={item.slotDate}
              startTime={item.slotStartTime}
              endTime={item.slotEndTime}
              clinicName={item.clinicName}
              address={item.clinicAddress}
              patientName={item.patientName}
            />
          )}
          keyExtractor={(item) => item.doctorId}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  inputStyle: {
    fontSize: 16,
    color: "#292929",
  },
  inputContainerStyle: {
    backgroundColor: "#fff",
    height: 50,
  },
  containerStyle: {
    padding: 10,
    borderRadius: 16,
  },
  leftIconContainerStyle: {
    paddingLeft: 8,
  },
  scrollContainer: {
    paddingVertical: 16,
  },
});