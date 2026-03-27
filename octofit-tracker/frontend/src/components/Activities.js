import ResourceTableCard from './ResourceTableCard';
import { getApiEndpoint } from './apiUtils';

function Activities() {
  const endpoint = getApiEndpoint('activities');

  return (
    <ResourceTableCard
      title="Activities"
      endpoint={endpoint}
      primaryFields={['name', 'activity_type', 'title']}
      secondaryFields={['duration', 'date', 'status']}
      emptyMessage="No activities logged yet."
    />
  );
}

export default Activities;
