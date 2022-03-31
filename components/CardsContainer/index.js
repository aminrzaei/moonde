import { Grid } from '@mantine/core';
import EventCard from '../EventCard';

const CardsContainer = () => {
  return (
    <Grid gutter="sm">
      <Grid.Col sm={6} lg={4}>
        <EventCard />
      </Grid.Col>
      <Grid.Col sm={6} lg={4}>
        <EventCard />
      </Grid.Col>
      <Grid.Col sm={6} lg={4}>
        <EventCard />
      </Grid.Col>
      <Grid.Col sm={6} lg={4}>
        <EventCard />
      </Grid.Col>
    </Grid>
  );
};

export default CardsContainer;
