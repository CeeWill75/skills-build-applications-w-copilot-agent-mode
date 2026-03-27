import { useEffect } from 'react';
import { getApiEndpoint } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Workouts() {
  const endpoint = getApiEndpoint('workouts');

  useEffect(() => {
    console.log('[Workouts] REST endpoint:', endpoint);
  }, [endpoint]);

  return (
    <ResourceTableCard
      title="Workouts"
      endpoint={endpoint}
      onDataFetched={(normalizedData, rawData) => {
        console.log('[Workouts] fetched raw data:', rawData);
        console.log('[Workouts] normalized data:', normalizedData);
      }}
      primaryFields={['name', 'title', 'workout_name']}
      secondaryFields={['duration', 'intensity', 'difficulty']}
      emptyMessage="No workouts found."
    />
  );
}

export default Workouts;
