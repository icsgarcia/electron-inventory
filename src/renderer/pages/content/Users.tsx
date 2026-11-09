import { DataTable } from '@/components/ui/data-table'
import { User, columns } from '@/components/user/column'
import { useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    {
      schoolNumber: "4354656",
      userName: "Ivan Garcia",
      email: "ivan.garcia@example.com",
      role: "Student",
      department: "Computer Science",
      status: "Active",
      // action: null,
    }
  ])


  return (
    <div className="container py-4">
      <DataTable columns={columns} data={users} />
    </div>
  )
}

export default Users