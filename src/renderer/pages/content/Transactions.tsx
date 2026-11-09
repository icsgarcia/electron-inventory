import { DataTable } from '@/components/ui/data-table'
import { type Transaction, columns } from "@/components/transaction/column"
import { useState } from 'react'

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      username: "Ivan Garcia",
      borrowedTool: "Hammer",
      borrowedDate: "string",
      returnedDate: "string",
      status: "string",
    }
  ])

  return (
    <div className="container py-4">
      <DataTable columns={columns} data={transactions} />
    </div >
  )
}

export default Transactions