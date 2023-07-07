import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledCard = styled(Card)({
 minWidth: 275,
 backgroundColor: '#f5f5f5',
 marginBottom: 10,
 borderRadius: 8,
 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const StyledCardContent = styled(CardContent)({
 paddingBottom: '16px !important',
});

const Title = styled(Typography)({
 fontSize: 20,
 fontWeight: 'bold',
});

const Text = styled(Typography)({
 fontSize: 16,
 marginBottom: 8,
});

interface NeoCardProps {
 date: string;
 maxDiameter: number;
 hazardousCount: number;
 closestNeo: number;
 fastestNeo: number;
 isTopHazardous: boolean;
}

const NeoCard = ({
 date,
 maxDiameter,
 hazardousCount,
 closestNeo,
 fastestNeo,
 isTopHazardous,
}: NeoCardProps): JSX.Element => {
 return (
  <StyledCard sx={{ backgroundColor: isTopHazardous ? 'red' : 'inherit' }}>
   <StyledCardContent>
    <Title>{date}</Title>
    <Text>Max Diameter: {maxDiameter} km</Text>
    <Text>Hazardous NEOs: {hazardousCount}</Text>
    <Text>Closest NEO: {closestNeo} km</Text>
    <Text>Fastest NEO: {fastestNeo} kph</Text>
   </StyledCardContent>
  </StyledCard>
 );
};

export default NeoCard;
