import styles from "./nearbyjobs.style";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "ReactJs Developer",
    num_pages: "1",
  });

  console.log("Data:", data);
  console.log("Error:", error);

  // Function to handle when job card is pressed
  const handleNavigate = (jobId) => {
    router.push(`/job-details/${jobId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobListContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <View>
            <Text>Something went wrong</Text>
            <Text>
              {error.response?.status === 429
                ? "Rate limit exceeded. Please try again later."
                : error.message}
            </Text>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <NearbyJobCard
                job={item}
                key={item.job_id}
                handleNavigate={() => handleNavigate(item.job_id)}
              />
            )}
            keyExtractor={(item) => item.job_id}
          />
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
