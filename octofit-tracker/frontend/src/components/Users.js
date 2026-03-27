import ResourceTableCard from './ResourceTableCard';
import { getApiEndpoint } from './apiUtils';

function Users() {
  const endpoint = getApiEndpoint('users');

  return (
    <ResourceTableCard
      title="Users"
      endpoint={endpoint}
      primaryFields={['name', 'username', 'email']}
      secondaryFields={['email', 'role', 'team']}
      emptyMessage="No users found."
    />
  );
}

export default Users;