import { useEffect } from 'react';
import ResourceTableCard from './ResourceTableCard';

function Activities() {
  const host = window.location.hostname;
  const codespaceSuffix = '-3000.app.github.dev';
  const inferredCodespaceName = host.endsWith(codespaceSuffix)
    ? host.slice(0, -codespaceSuffix.length)
    : '';
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME || inferredCodespaceName;
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/';

  useEffect(() => {
    console.log('[Activities] REST endpoint:', endpoint);
  }, [endpoint]);

  return (
    <ResourceTableCard
      title="Activities"
      endpoint={endpoint}
      onDataFetched={(normalizedData, rawData) => {
        console.log('[Activities] fetched raw data:', rawData);
        console.log('[Activities] normalized data:', normalizedData);
      }}
      primaryFields={['name', 'activity_type', 'title']}
      secondaryFields={['duration', 'date', 'status']}
      emptyMessage="No activities logged yet."
    />
  );
}

export default Activities;
