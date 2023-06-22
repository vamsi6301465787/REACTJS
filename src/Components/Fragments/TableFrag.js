import React from 'react'
import TableChildFrag from './TableChildFrag'

function TableFrag() {
  return (
    <>
    <table border={20}>
        <thead>
        <tr>
            <TableChildFrag></TableChildFrag>
        </tr>
        </thead>
    </table>
    </>
  )
}

export default TableFrag