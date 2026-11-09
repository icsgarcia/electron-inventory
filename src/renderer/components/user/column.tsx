import { createColumnHelper } from "@tanstack/react-table"
import { type DataTableFeatures } from "../ui/data-table-features"

export type User = {
  schoolNumber: string
  userName: string
  email: string
  role: string
  department: string
  status: string
  action?: string | null
}

const columnHelper = createColumnHelper<DataTableFeatures, User>()

export const columns = columnHelper.columns([
  columnHelper.accessor("schoolNumber", {
    header: "School Number",
  }),
  columnHelper.accessor("userName", {
    header: "User Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("department", {
    header: "Department",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("action", {
    header: "Action",
  }),
])