export function getApiBaseUrl() {
  const envCodespaceName = process.env.REACT_APP_CODESPACE_NAME;
  if (envCodespaceName) {
    return `https://${envCodespaceName}-8000.app.github.dev/api`;
  }

  const host = window.location.hostname;
  const codespaceSuffix = '-3000.app.github.dev';
  if (host.endsWith(codespaceSuffix)) {
    const codespaceName = host.slice(0, -codespaceSuffix.length);
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }

  return 'http://localhost:8000/api';
}

export function getApiEndpoint(resource) {
  return `${getApiBaseUrl()}/${resource}/`;
}

export function normalizeApiResponse(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && Array.isArray(payload.results)) {
    return payload.results;
  }

  return [];
}
