import { useState } from "react";
import './index.css'
import * as React from 'react'
import ReactDOM from 'react-dom/client'
// https://tanstack.com/table/latest/docs/framework/react/examples/basic?path=examples%2Freact%2Fbasic%2Fsrc%2Fmain.tsx
// above for tanstack examples
// https://tanstack.com/table/latest/docs/framework/react/examples/basic?path=examples%2Freact%2Fbasic%2Findex.html


import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

 type TimelineHeaders = {
        date: string,
        description: string,
        moneyIn: number,
        moneyOut: number,
        balance: number,
        category: string
    }

    const defaultData: TimelineHeaders[] = [
        {
            date: 'monday',
            description: "money owed to Bill for rent",
            moneyIn: 0,
            moneyOut: 160,
            balance: 0,
            category: "RENT",
        },
        {
            date: 'tuesday',
            description: "Monthly Universal Credit Money income",
            moneyIn: 800,
            moneyOut: 0,
            balance: 800,
            category: "Universal Credit",
        },
        {
            date: 'wednesday',
            description: "Money to abdisalam for office",
            moneyIn: 800,
            moneyOut: 68,
            balance: 0,
            category: "Bills",
        },
    ]

const columnHelper = createColumnHelper<TimelineHeaders>()
const columns = [
  columnHelper.accessor('date', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.description, {
    id: 'description',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Description</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('moneyIn', {
    header: () => 'moneyIn',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('moneyOut', {
    header: () => <span>money out</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('balance', {
    header: 'Balance',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('category', {
    header: 'Profile category',
    footer: info => info.column.id,
  }),
]

export default function Transaction() {
    const [data, _setData] = React.useState(() => [...defaultData])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  )

   

}