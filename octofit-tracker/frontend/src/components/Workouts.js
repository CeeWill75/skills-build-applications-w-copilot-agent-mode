import { useEffect } from 'react';
import ResourceTableCard from './ResourceTableCard';

function Workouts() {
  const host = window.location.hostname;
  const codespaceSuffix = '-3000.app.github.dev';
  const inferredCodespaceName = host.endsWith(codespaceSuffix)
    ? host.slice(0, -codespaceSuffix.length)
    : '';
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME || inferredCodespaceName;
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/';

  useEffect(() => {
    console.log('[Workouts] REST endpoint:', endpoint);
  }, [endpoint]);

  return (
    <ResourceTableCard
      title="Workouts"
      endpoint={endpoint}
      onDataFetched={(normalizedData, rawData) => {
        console.log('[Workouts] fetched raw data:', rawData);
        console.log('[Workouts] normalized data:', normalizedData);
      }}
      primaryFields={['name', 'title', 'workout_name']}
      secondaryFields={['duration', 'intensity', 'difficulty']}
      emptyMessage="No workouts found."
    />
  );
}

export default Workouts;
