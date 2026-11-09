import { columns, Tool } from '@/components/tool/column'
import { DataTable } from '@/components/ui/data-table'
import { useState } from 'react'

const Tools = () => {
  const [tools, setTools] = useState<Tool[]>([
    {
      tagNumber: "string",
      toolName: "string",
      totalQuantity: 0,
      available: 0,
      checkedOut: 0,
    }
  ])
  return (
    <div className="container py-4">
      <DataTable columns={columns} data={tools} />
    </div>
  )
}

export default Tools