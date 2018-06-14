const transformData = (contact) => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
})

export const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api")
  const { results } = await response.json()
  return results.map(transformData)


}