import { useEffect } from 'react';
import { getApiEndpoint } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Users() {
  const endpoint = getApiEndpoint('users');

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