async function fetchTransactions() {
  const query = `
      {
        users {
          items {
            id,
            name
          }
        }
      }`;

  const endpoint = '/data-api/graphql';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query }),
  });
  const result = await response.json();
  console.table(result.data);
}
