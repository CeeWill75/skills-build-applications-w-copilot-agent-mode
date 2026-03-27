import ResourceTableCard from './ResourceTableCard';
import { getApiEndpoint } from './apiUtils';

function Workouts() {
  const endpoint = getApiEndpoint('workouts');

  return (
    <ResourceTableCard
      title="Workouts"
      endpoint={endpoint}
      primaryFields={['name', 'title', 'workout_name']}
      secondaryFields={['duration', 'intensity', 'difficulty']}
      emptyMessage="No workouts found."
    />
  );
}

export default Workouts;
