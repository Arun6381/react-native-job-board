import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "NodeJS Developer",
  });
  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <>
            <Text>Something went wrong</Text>
            <Text>{error.message}</Text> {/* Display the error message */}
          </>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                setSelectedJob={setSelectedJob}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id?.toString()}
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
