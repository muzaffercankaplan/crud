export default async function deleteUser(id) {
  const response = await fetch(`https://dummyjson.com/users/${id}`, {
    method: "DELETE",
  });

  return await response.json();
}
