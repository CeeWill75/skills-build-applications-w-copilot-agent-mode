import { getApiBaseUrl } from './apiUtils';
import ResourceTableCard from './ResourceTableCard';

function Teams() {
  const apiBaseUrl = getApiBaseUrl();
  const endpoint = `${apiBaseUrl}/teams/`;

  return (
    <ResourceTableCard
      title="Teams"
      endpoint={endpoint}
      primaryFields={['name', 'team_name']}
      secondaryFields={['captain', 'members_count', 'status']}
      emptyMessage="No teams available."
    />
  );
}

export default Teams;
