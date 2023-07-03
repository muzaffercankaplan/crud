export default async function searchValue(value, limit, skip) {
  const response = await fetch(
    `https://dummyjson.com/users/search?q=${value}&limit=${limit}&skip=${skip}&select=image,firstName,lastName,email,phone,domain,company`
  );
  if (!response.ok) {
    throw new Error("failed to fetch users");
  }

  return await response.json();
}
