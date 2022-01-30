import React, { useEffect, useState } from 'react';
import get from 'lodash.get';

const Table = ({
    tableRows = [],
    tableColumns = [],
    meta = null,
    changePage = () => undefined
}
) => {
 

    const [pages, setPages] = useState([]);
    const [paginationFlag, setPaginationFlag] = useState(1);

    const pageCount = 15;

    useEffect(() => {
        if (!meta) return;
        let temp = [];
        let pageStart = ((paginationFlag - 1) * pageCount) + 1;
        console.log(pageStart)
        console.log(meta.numberOfPages)

        if (meta.numberOfPages - (pageStart - 1) <= pageCount) {
            for (let i = pageStart; i <= meta.numberOfPages; i++) {
                temp.push(i);
            }
        } else {
            for (let i = pageStart; i < pageStart + pageCount; i++) {
                temp.push(i);
            }
        }

        setPages(temp);
    }, [paginationFlag, meta])

    useEffect(() => {
        setPaginationFlag(Math.ceil(meta.pageNumber / pageCount))
    }, [meta])



    return (
        <div className="table-main">
            {/* <h1 >{JSON.stringify(meta)}</h1> */}

            <table className="table cust-table">
                <thead className="table-danger">
                    {/* <div className="card table-row-card"> */}

                    <tr className=" table-row-card">
                        {
                            tableRows.map((row, index) => {
                                return <th scope="col" key={index}>{row.name}</th>;
                            })
                        }
                    </tr>
                    {/* </div> */}
                </thead>
                <tbody >
                    {/* <div > */}
                    {
                        tableColumns.map((column, index) => {
                            return (
                                <tr key={index} className="table-row-card">
                                    {
                                        tableRows.map((row, index2) => {
                                            return (
                                                <td scope="col" key={index2}>{get(column, row.key, "----")}</td>
                                            );
                                        })
                                    }
                                </tr>
                            )
                        })
                        // </div>
                    }
                    {meta && (meta.numberOfPages > 1) ? <tr className="table-footer">
                        <td colSpan={`${tableRows.length}`}>
                            Showing {(meta.pageSize * (meta.pageNumber - 1)) + 1} to {(meta.pageSize * (meta.pageNumber - 1)) + meta.pageCount} of {meta.total} entries
                            <nav className='pagination-div'>
                                <ul className="pagination">
                                    <li
                                        onClick={() => {
                                            if (meta.pageNumber !== 1)
                                                changePage(meta.pageNumber - 1)
                                        }}
                                        className={`page-item ${meta.pageNumber === 1 ? 'disabled' : ''}`}>
                                        <a className="page-link" >Previous</a>
                                    </li>
                                    {
                                        pages.map(i => {
                                            return (
                                                <li
                                                    onClick={() => {
                                                        if (i !== meta.pageNumber)
                                                            changePage(i)
                                                    }}
                                                    key={i}
                                                    className={`page-item ${i === meta.pageNumber ? 'active' : ''}`}>
                                                    <a className="page-link" >{i}</a>
                                                </li>
                                            )
                                        })
                                    }

                                    <li
                                        className={`page-item ${meta.pageNumber === meta.numberOfPages ? 'disabled' : ''}`}
                                        onClick={() => {
                                            if (meta.pageNumber !== meta.numberOfPages)
                                                changePage(meta.pageNumber + 1)
                                        }}
                                    >
                                        <a className="page-link" >Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </td>
                    </tr> : <tr className="table-footer">
                                <td colSpan={`${tableRows.length}`}>
                                Showing {1} to {meta.total} of {meta.total} entries    
                                </td>
                            </tr>
                        } 
                </tbody>
            </table>

        </div>
    );
}

export { Table };