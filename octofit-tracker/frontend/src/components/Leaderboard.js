import { getApiBaseUrl } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Leaderboard() {
  const apiBaseUrl = getApiBaseUrl();
  const endpoint = `${apiBaseUrl}/leaderboard/`;

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
