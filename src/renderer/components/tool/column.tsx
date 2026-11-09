import { createColumnHelper } from "@tanstack/react-table"
import { type DataTableFeatures } from "../ui/data-table-features"
import { Eye } from "lucide-react"
import { Button } from "../ui/button"

export type Tool = {
  tagNumber: string
  toolName: string
  totalQuantity: number
  available: number
  checkedOut: number
  action?: string | null
}

const columnHelper = createColumnHelper<DataTableFeatures, Tool>()

export const columns = columnHelper.columns([
  columnHelper.accessor("tagNumber", {
    header: "Tag Number",
  }),
  columnHelper.accessor("toolName", {
    header: "Tool Name",
  }),
  columnHelper.accessor("totalQuantity", {
    header: "Total Quantity",
  }),
  columnHelper.accessor("available", {
    header: "Available",
  }),
  columnHelper.accessor("checkedOut", {
    header: "Checked Out",
  }),
  columnHelper.display({
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <div>
          <Button variant="outline" size="icon">
            <Eye />
          </Button>
        </div>
      )
    },
  }),
])