import { useEffect } from 'react';
import { getApiEndpoint } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Leaderboard() {
  const endpoint = getApiEndpoint('leaderboard');

  useEffect(() => {
    console.log('[Leaderboard] REST endpoint:', endpoint);
  }, [endpoint]);

  return (
    <ResourceTableCard
      title="Leaderboard"
      endpoint={endpoint}
      onDataFetched={(normalizedData, rawData) => {
        console.log('[Leaderboard] fetched raw data:', rawData);
        console.log('[Leaderboard] normalized data:', normalizedData);
      }}
      primaryFields={['user', 'name', 'username']}
      secondaryFields={['score', 'points', 'rank']}
      emptyMessage="No leaderboard data found."
    />
  );
}

export default Leaderboard;
