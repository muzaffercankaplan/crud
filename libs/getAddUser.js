export default async function getAddUsers(data) {
  const response = await fetch(`https://dummyjson.com/users/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
