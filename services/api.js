export const getUsers = async (page) => {
    const response = await fetch(`/api/users?page=${page}`);
    if (!response.ok) throw new Error("Error fetching users");
    return response.json();
  };
  