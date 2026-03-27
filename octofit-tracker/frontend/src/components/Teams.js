import { useEffect } from 'react';
import { getApiEndpoint } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Teams() {
  const endpoint = getApiEndpoint('teams');

  useEffect(() => {
    console.log('[Teams] REST endpoint:', endpoint);
  }, [endpoint]);

  return (
    <ResourceTableCard
      title="Teams"
      endpoint={endpoint}
      onDataFetched={(normalizedData, rawData) => {
        console.log('[Teams] fetched raw data:', rawData);
        console.log('[Teams] normalized data:', normalizedData);
      }}
      primaryFields={['name', 'team_name']}
      secondaryFields={['captain', 'members_count', 'status']}
      emptyMessage="No teams available."
    />
  );
}

export default Teams;
