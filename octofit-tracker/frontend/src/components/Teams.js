import { useEffect } from 'react';
import ResourceTableCard from './ResourceTableCard';

function Teams() {
  const host = window.location.hostname;
  const codespaceSuffix = '-3000.app.github.dev';
  const inferredCodespaceName = host.endsWith(codespaceSuffix)
    ? host.slice(0, -codespaceSuffix.length)
    : '';
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME || inferredCodespaceName;
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
    : 'http://localhost:8000/api/teams/';

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
