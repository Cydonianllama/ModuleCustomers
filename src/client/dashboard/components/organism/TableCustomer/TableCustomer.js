import React, {useEffect,useContext,useState} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

//contexts
import CustomerContext from '../../../../context/CustomerContext'

// header of my table
const columsDefs = [
    { headerName: "id", field: "_id", sortable: false, filter: true },
    { headerName: "firstName", field: "firstName", sortable: false, filter: true },
    { headerName: "lastName", field: "lastName", sortable: false, filter: true },
    { headerName: "email", field: "email", sortable: false, filter: true },
    { headerName: "phone number", field: "phoneNumber", sortable: false, filter: true },
]

const TableCustomer = ({
    actions
}) => {

    const [gridAPI,setGridAPI] = useState(null)
    const [ColumnGridAPI,setColumnGridAPI] = useState(null)

    //ag grid handler functionality - 1
    const onGridReady = (params) => {
        setGridAPI(params.api)
        setColumnGridAPI(params.columnApi)
    }

    //ag grid handler functionality - 2
    const onSelectionChanged = () => {

        var selectedRows = gridAPI.getSelectedRows();
        actions.populateCurrentCustomers(selectedRows)

        document.querySelector('#selectedRows').innerHTML =
            selectedRows.length === 1 ? selectedRows[0]._id : '';
    };

    const customerContext = useContext(CustomerContext)
    useEffect(async ()=>{
        customerContext.findByPage(1)
    },[])

    return(
        <>
            <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-sm-12 btn btn-info">
                    <h4>
                        Current ID :
                    </h4>
                    <span id = "selectedRows">
                        
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body position-relative">
                            <div className="ag-theme-alpine" style={{ height: "550px" }}>
                                <AgGridReact
                                    columnDefs={columsDefs}
                                    rowData={[...customerContext.stateCustomers.customers]}
                                    pagination={true} 
                                    paginationPageSize={100}
                                    rowSelection={'single'}
                                    onGridReady={onGridReady}
                                    onSelectionChanged={onSelectionChanged}
                                >
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TableCustomer