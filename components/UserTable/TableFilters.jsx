import { Input } from "@/components/ui/input";
import { ColumnVisibilityDropdown } from "./ColumnVisibilityDropdown";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function TableFilters({ table }) {
  const [searchColumn, setSearchColumn] = useState("email");

  // Get searchable columns (excluding select and actions columns)
  const searchableColumns = table
    .getAllColumns()
    .filter(
      (column) =>
        column.getCanFilter() && !["select", "actions"].includes(column.id)
    );

  return (
    <div className="flex items-center py-4 gap-2">
      <div className="flex items-center gap-2 max-w-sm">
        <Select value={searchColumn} onValueChange={setSearchColumn}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select column" />
          </SelectTrigger>
          <SelectContent>
            {searchableColumns.map((column) => (
              <SelectItem
                key={column.id}
                value={column.id}
                className="capitalize"
              >
                {column.id}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder={`Search ${searchColumn}...`}
          value={table.getColumn(searchColumn)?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn(searchColumn)?.setFilterValue(event.target.value)
          }
          className="w-[250px]"
        />
      </div>
      <ColumnVisibilityDropdown table={table} />
    </div>
  );
}
