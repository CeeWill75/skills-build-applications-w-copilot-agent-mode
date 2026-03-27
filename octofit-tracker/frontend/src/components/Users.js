import { useEffect } from 'react';
import ResourceTableCard from './ResourceTableCard';

function Users() {
  const host = window.location.hostname;
  const codespaceSuffix = '-3000.app.github.dev';
  const inferredCodespaceName = host.endsWith(codespaceSuffix)
    ? host.slice(0, -codespaceSuffix.length)
    : '';
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME || inferredCodespaceName;
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/';

  useEffect(() => {
    console.log('[Users] REST endpoint:', endpoint);
  }, [endpoint]);

  return (
    <ResourceTableCard
      title="Users"
      endpoint={endpoint}
      onDataFetched={(normalizedData, rawData) => {
        console.log('[Users] fetched raw data:', rawData);
        console.log('[Users] normalized data:', normalizedData);
      }}
      primaryFields={['name', 'username', 'email']}
      secondaryFields={['email', 'role', 'team']}
      emptyMessage="No users found."
    />
  );
}

export default Users;