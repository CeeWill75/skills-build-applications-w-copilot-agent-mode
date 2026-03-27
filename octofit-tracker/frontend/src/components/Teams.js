import ResourceTableCard from './ResourceTableCard';
import { getApiEndpoint } from './apiUtils';

function Teams() {
  const endpoint = getApiEndpoint('teams');

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
