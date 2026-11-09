import { createColumnHelper } from "@tanstack/react-table"
import { type DataTableFeatures } from "../ui/data-table-features"

export type Transaction = {
  id: number
  username: string
  borrowedTool: string
  borrowedDate: string
  returnedDate: string
  status: string
}

const columnHelper = createColumnHelper<DataTableFeatures, Transaction>()

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("username", {
    header: "User Name",
  }),
  columnHelper.accessor("borrowedTool", {
    header: "Borrowed Tool",
  }),
  columnHelper.accessor("borrowedDate", {
    header: "Borrowed Date",
  }),
  columnHelper.accessor("returnedDate", {
    header: "Returned Date",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
])