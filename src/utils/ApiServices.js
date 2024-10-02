// import axios from "axios";

// export const getListOfCustomers = async () => {
//   try {
//     var finalUrl;
//     if (endDate !== "") {
//       console.log(
//         `Histry Call + ${podMetricUrl}/getAllPodMetrics?from_date=${startDate}&to_date=${endDate}&application_user_name=${userName}&clusterName=${clusterName}&page=${page}&pageSize=${pageSize}`
//       );
//       finalUrl = `${podMetricUrl}/getAllPodMetrics?from_date=${startDate}&to_date=${endDate}&application_user_name=${userName}&clusterName=${clusterName}&page=${page}&pageSize=${pageSize}`;
//     } else {
//       console.log(
//         `Minutes Call + ${podMetricUrl}/getAllPodMetrics?minutes_ago=${minutesAgo}&application_user_name=${userName}&clusterName=${clusterName}&page=${page}&pageSize=${pageSize}`
//       );
//       finalUrl = `${podMetricUrl}/getAllPodMetrics?minutes_ago=${minutesAgo}&application_user_name=${userName}&clusterName=${clusterName}&page=${page}&pageSize=${pageSize}`;
//     }

//     const response = await axios.get(finalUrl);
//     return response.data;
//   } catch (error) {
//     console.error("Error retrieving Node Metric Data:", error);
//     throw error;
//   }
// };
