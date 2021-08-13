import React, {useState} from 'react';

/*
* constants
* */
import {DATA_TABLE} from "../../utils/constants/table/dataTablesMock";

/*
* interfaces
* */
import {ITableRow, ITableHeader} from "../../utils/constants/table/dataTablesMock";

interface IBasePagination {
    itemsPerView: number;
    tableHeader: ITableHeader[];
    tableRow: ITableRow[];
}


export function TablePagination(props: IBasePagination) {


    /*
    * props destructuring
    * */
    const {itemsPerView, tableHeader, tableRow} = props;

    /*
    * state
    * */
    const [page, setPage] = useState(1);
    const [items, setItems] = useState(props.itemsPerView);
    const [sortBy, setSortBy] = useState('');
    const [sortedArr, setSortedArr] = useState(DATA_TABLE);
    const [sortDirection, setSortDirection] = useState(true);

    /*
    * handler of number of items per page
    * */
    const itemsPerPageHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        return setItems(() => Number(event.target.value));
    }

    /*
    * sort arr
    * */
    const sortArr = (key: string) => {
        return sortedArr.sort((a: ITableRow, b: ITableRow): number => {
            const x = a[key as keyof ITableRow] || 0;
            const y = b[key as keyof ITableRow] || 0;
            if (sortDirection) {
                setSortDirection(false);
                if (x < y) return -1;
                if (x > y) return 1;
            }
            if (!sortDirection) {
                setSortDirection(true);
                if (x > y) return -1;
                if (x < y) return 1;
            }
            return 0;
        })
    }

    /*
    * sort handler
    * */
    const sortByHandler = (key: string) => () => {
        if (sortDirection) {
            setSortDirection(prevState => false);
        }
        setSortBy(key);
        setPage(1);
        sortArr(key);
    };

    /*
    * values for select (items per page)
    * */
    const itemsPerPage = [itemsPerView, itemsPerView + 2, itemsPerView + 4];
    const selectOptions = itemsPerPage.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });

    /*
    * next page
    * */
    const nextPage = () => {
        const maxPagesNum = Math.ceil(tableRow.length / items);
        if (maxPagesNum * items >= (page + 1) * items) {
            setPage(prevState => prevState + 1);
        }
    }

    /*
    * prev page
    * */
    const prevPage = () => {
        if (page - 1 >= 0 || page - 1 === 0) {
            setPage(prevState => prevState - 1 > 0 ? prevState - 1 : 1);
        }
    }

    /*
    * render page
    * */
    const renderPage = () => {
        const start = page === 1 ? 0 : (page - 1) * items;
        const end = page === 1 ? page * items : page * items;
        return sortedArr.slice(start, end);
    }

    /*
    * render table heading
    * */
    const renderTableHeading = () => tableHeader.map((item, index) => {
        return (
            <th key={index} onClick={sortByHandler(item.key)}>{item.label}
                <i className="table-pagination__sort-btn bi bi-arrow-down-up"></i>
            </th>
        )
    })

    /*
    * render table row
    * */
    const renderTable = () => renderPage().map((row: ITableRow, rowIndex) => {
        return (
            <tr key={rowIndex}>
                {tableHeader.map((header, headerIndex) => {
                    return (
                        <td key={headerIndex}>{row[header.key as keyof ITableRow]}</td>
                    )
                })}
            </tr>
        )
    });

    /*
    * prev / next buttons
    * */
    const prevNextHandler = () => {
        const maxPagesNum = Math.ceil(tableRow.length / items)
        const btns = [];
        let i = 2;
        while (maxPagesNum >= i) {
            btns.push(i);
            i++;
        }
        return btns.map((item, index) => (
            <span onClick={nextPage} key={index}>{item - 1}</span>
        ))
    }

    /*
    * render page
    * */
    return (
        <div className={"table-pagination"}>
            <form>
                <label>
                    Show
                    <select
                        value={items}
                        onChange={itemsPerPageHandler}
                        className={"table-pagination__select"}
                    >
                        {selectOptions}
                    </select>
                    entries
                </label>
            </form>
            <table>
                <thead>
                <tr>{renderTableHeading()}</tr>
                </thead>
                <tbody>
                {renderTable()}
                </tbody>
            </table>
            <button onClick={prevPage}>prev{page}</button>
            <button onClick={nextPage}>next{page}</button>
            <div>
                {prevNextHandler()}
            </div>
        </div>
    )
}