import { getApiBaseUrl } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Activities() {
  const apiBaseUrl = getApiBaseUrl();
  const endpoint = `${apiBaseUrl}/activities/`;

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
