import { useEffect } from 'react';
import { getApiEndpoint } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Activities() {
  const endpoint = getApiEndpoint('activities');

  useEffect(() => {
    console.log('[Activities] REST endpoint:', endpoint);
  }, [endpoint]);

  return (
    <ResourceTableCard
      title="Activities"
      endpoint={endpoint}
      onDataFetched={(normalizedData, rawData) => {
        console.log('[Activities] fetched raw data:', rawData);
        console.log('[Activities] normalized data:', normalizedData);
      }}
      primaryFields={['name', 'activity_type', 'title']}
      secondaryFields={['duration', 'date', 'status']}
      emptyMessage="No activities logged yet."
    />
  );
}

export default Activities;
