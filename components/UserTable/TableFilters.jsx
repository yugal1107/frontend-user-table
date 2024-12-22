// src/components/users/TableFilters.jsx
import { Input } from "@/components/ui/input";
import { ColumnVisibilityDropdown } from "./ColumnVisibilityDropdown";

export function TableFilters({ table }) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Filter emails..."
        value={table.getColumn("email")?.getFilterValue() ?? ""}
        onChange={(event) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
      <ColumnVisibilityDropdown table={table} />
    </div>
  );
}
