export default async function getOneUser(id) {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  if (!response.ok) {
    throw new Error("failed to fetch users");
  }

  return await response.json();
}
