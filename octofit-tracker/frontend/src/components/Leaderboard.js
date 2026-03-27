import { useEffect } from 'react';
import ResourceTableCard from './ResourceTableCard';

function Leaderboard() {
  const host = window.location.hostname;
  const codespaceSuffix = '-3000.app.github.dev';
  const inferredCodespaceName = host.endsWith(codespaceSuffix)
    ? host.slice(0, -codespaceSuffix.length)
    : '';
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME || inferredCodespaceName;
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/';

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
