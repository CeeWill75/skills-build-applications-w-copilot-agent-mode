import { getApiBaseUrl } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Workouts() {
  const apiBaseUrl = getApiBaseUrl();
  const endpoint = `${apiBaseUrl}/workouts/`;

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
