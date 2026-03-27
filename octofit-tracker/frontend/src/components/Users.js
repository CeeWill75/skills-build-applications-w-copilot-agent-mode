import { getApiBaseUrl } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Users() {
  const apiBaseUrl = getApiBaseUrl();
  const endpoint = `${apiBaseUrl}/users/`;

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