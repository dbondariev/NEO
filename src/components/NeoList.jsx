import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, List, Typography, ListItem } from '@mui/material';
import NeoCard from './NeoCard';


const NeoList = () => {
 const [neoData, setNeoData] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchNeoData = async () => {
   try {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const formattedStartDate = startDate.toISOString().split('T')[0];

    const response = await axios.get(
     `https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedStartDate}&end_date=${
      today.toISOString().split('T')[0]
     }&api_key=hIpC9VpYspxElHynvcE8tQEZyWguy7f1FVBfRJl1`,
    );

    const neoData = response.data.near_earth_objects;

    const neoCards = Object.keys(neoData).map(date => {
     const neoDate = neoData[date];
     const maxDiameter = Math.max(
      ...neoDate.map(neo => neo.estimated_diameter.kilometers.estimated_diameter_max),
     );
     const hazardousCount = neoDate.filter(neo => neo.is_potentially_hazardous_asteroid).length;
     const closestNeo = Math.min(
      ...neoDate.map(neo => neo.close_approach_data[0].miss_distance.kilometers),
     );
     const fastestNeo = Math.max(
      ...neoDate.map(neo => neo.close_approach_data[0].relative_velocity.kilometers_per_hour),
     );

     return {
      date,
      maxDiameter,
      hazardousCount,
      closestNeo,
      fastestNeo,
     };
    });

    setNeoData(neoCards);
    setLoading(false);
   } catch (error) {
    console.error('Error fetching NEO data:', error);
    setLoading(false);
   }
  };

  fetchNeoData();
 }, []);

 return (
  <Box>
   <Typography variant="h4">NEO List</Typography>
   {loading ? (
    <Typography>Loading data...</Typography>
   ) : (
    <List>
     {neoData.map(neo => (
      <ListItem key={neo.date}>
       <NeoCard
        date={neo.date}
        maxDiameter={neo.maxDiameter}
        hazardousCount={neo.hazardousCount}
        closestNeo={neo.closestNeo}
        fastestNeo={neo.fastestNeo}
        isTopHazardous={neo.hazardousCount >= 2}
       />
      </ListItem>
     ))}
    </List>
   )}
  </Box>
 );
};

export default NeoList;


