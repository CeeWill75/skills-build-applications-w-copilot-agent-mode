import ResourceTableCard from './ResourceTableCard';
import { getApiEndpoint } from './apiUtils';

function Leaderboard() {
  const endpoint = getApiEndpoint('leaderboard');

  return (
    <ResourceTableCard
      title="Leaderboard"
      endpoint={endpoint}
      primaryFields={['user', 'name', 'username']}
      secondaryFields={['score', 'points', 'rank']}
      emptyMessage="No leaderboard data found."
    />
  );
}

export default Leaderboard;
