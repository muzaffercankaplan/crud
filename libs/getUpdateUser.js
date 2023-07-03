export default async function getupdateUser(data, id) {
  const response = await fetch(`https://dummyjson.com/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
