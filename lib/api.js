export async function getUsers(page = 1, limit = 5) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const users = await response.json();
  const totalCount = parseInt(response.headers.get("x-total-count") || "0", 10);
  return { users, totalCount };
}

