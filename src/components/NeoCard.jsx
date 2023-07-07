import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

const NeoCard = ({ date, maxDiameter, hazardousCount, closestNeo, fastestNeo, isTopHazardous }) => {
 return (
  <Card
   sx={{
    backgroundColor: isTopHazardous ? 'red' : 'inherit',
    minWidth: 275,
    marginBottom: 10,
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
   }}
  >
   <CardContent>
    <Typography variant="h5">{date}</Typography>
    <Typography variant="body1">Max Diameter: {maxDiameter} km</Typography>
    <Typography variant="body1">Hazardous NEOs: {hazardousCount}</Typography>
    <Typography variant="body1">Closest NEO: {closestNeo} km</Typography>
    <Typography variant="body1">Fastest NEO: {fastestNeo} kph</Typography>
   </CardContent>
  </Card>
 );
};

NeoCard.propTypes = {
 date: PropTypes.string.isRequired,
 maxDiameter: PropTypes.number.isRequired,
 hazardousCount: PropTypes.number.isRequired,
 closestNeo: PropTypes.number.isRequired,
 fastestNeo: PropTypes.number.isRequired,
 isTopHazardous: PropTypes.bool.isRequired,
};

export default NeoCard;
