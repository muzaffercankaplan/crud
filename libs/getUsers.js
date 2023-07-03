export default async function getUsers(limit, skip) {
  const response = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=image,firstName,lastName,email,phone,domain,company`
  );
  if (!response.ok) {
    throw new Error("failed to fetch users");
  }

  return await response.json();
}
