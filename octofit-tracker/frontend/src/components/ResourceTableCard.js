import { useCallback, useEffect, useMemo, useState } from 'react';
import { normalizeApiResponse } from './apiUtils';

function pickFirstString(record, keys) {
  for (const key of keys) {
    const value = record?.[key];
    if (typeof value === 'string' && value.trim()) {
      return value;
    }

    if (typeof value === 'number') {
      return String(value);
    }
  }

  return '';
}

function ResourceTableCard({
  title,
  endpoint,
  primaryFields,
  secondaryFields,
  emptyMessage,
  onDataFetched,
}) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const loadItems = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      console.log(`${title} endpoint:`, endpoint);
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`${title} request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log(`${title} fetched data:`, data);
      const normalizedData = normalizeApiResponse(data);
      setItems(normalizedData);
      if (onDataFetched) {
        onDataFetched(normalizedData, data);
      }
    } catch (err) {
      console.error(`${title} fetch failed:`, err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, onDataFetched, title]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedItem]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(normalizedQuery)
    );
  }, [items, query]);

  return (
    <section className="card border-0 shadow-sm octofit-section-card">
      <div className="card-body p-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <h2 className="h4 mb-0">{title}</h2>
          <a
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href={endpoint}
            target="_blank"
            rel="noreferrer"
          >
            Open API endpoint
          </a>
        </div>

        <form
          className="row g-2 align-items-end mb-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="col-12 col-md-8 col-lg-6">
            <label htmlFor={`${title.toLowerCase()}-search`} className="form-label">
              Search {title}
            </label>
            <input
              id={`${title.toLowerCase()}-search`}
              className="form-control"
              placeholder={`Filter ${title.toLowerCase()}...`}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="col-12 col-md-auto">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={loadItems}
              disabled={isLoading}
            >
              Refresh
            </button>
          </div>
        </form>

        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : null}

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle octofit-table">
            <thead className="table-light">
              <tr>
                <th scope="col" style={{ width: '70px' }}>
                  #
                </th>
                <th scope="col">Primary</th>
                <th scope="col">Secondary</th>
                <th scope="col" style={{ width: '130px' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    <div className="spinner-border spinner-border-sm me-2" role="status" />
                    Loading...
                  </td>
                </tr>
              ) : null}

              {!isLoading && filteredItems.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-4">
                    {emptyMessage}
                  </td>
                </tr>
              ) : null}

              {!isLoading
                ? filteredItems.map((item, index) => {
                    const primaryText =
                      pickFirstString(item, primaryFields) || `Item ${index + 1}`;
                    const secondaryText =
                      pickFirstString(item, secondaryFields) || 'No details available';

                    return (
                      <tr key={item.id || item._id || `${title}-${index}`}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <a
                            href="#open-detail"
                            className="link-primary text-decoration-none"
                            onClick={(event) => {
                              event.preventDefault();
                              setSelectedItem(item);
                            }}
                          >
                            {primaryText}
                          </a>
                        </td>
                        <td>{secondaryText}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                            onClick={() => setSelectedItem(item)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>

      {selectedItem ? (
        <>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title h5">{title} Details</h3>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setSelectedItem(null)}
                  />
                </div>
                <div className="modal-body">
                  <pre className="bg-light border rounded p-3 mb-0 small">{JSON.stringify(selectedItem, null, 2)}</pre>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            onClick={() => setSelectedItem(null)}
            role="presentation"
          />
        </>
      ) : null}
    </section>
  );
}

export default ResourceTableCard;