import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import { people } from "@/database";

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 70,
    sortable: true,
    renderCell: (params: GridCellParams) => <>{params.value}</>
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>
  },
  {
    field: 'firstName',
    headerName: 'First name',
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>
  },
  {
    field: 'age',
    headerName: 'Age',
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>
  },
  {
    field: 'house',
    headerName: 'House',
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>
  },
  {
    field: 'title',
    headerName: 'Title',
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>
  }
]

const Table = () => {

  const pageOptions = [5, 10, 15]
  const pageSize = 5

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
      <DataGrid
        columns={columns}
        rows={people}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        pageSizeOptions={pageOptions}
        // getRowId={(row) => row.id}
        
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
              page: 0,
            }
          }
        }}


      />
    </Container>
  )
}
export default Table