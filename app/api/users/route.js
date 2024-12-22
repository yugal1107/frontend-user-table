import { NextResponse } from 'next/server'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page') ?? '1')
  const search = searchParams.get('search') ?? ''
  const limit = 5 // Number of users per page

  const response = await fetch(API_URL)
  const allUsers = await response.json()

  let filteredUsers = allUsers
  if (search) {
    filteredUsers = allUsers.filter((user) =>
      Object.values(user).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      )
    )
  }

  const totalPages = Math.ceil(filteredUsers.length / limit)
  const paginatedUsers = filteredUsers.slice((page - 1) * limit, page * limit)

  return NextResponse.json({ users: paginatedUsers, totalPages })
}
