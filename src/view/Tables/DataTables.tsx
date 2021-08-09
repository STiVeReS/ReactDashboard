import React from 'react';
import {IPageProps} from "../../utils/interfaces/pages";

/*
* components
* */
import {PropsToSideBar} from "../../components/Navigation/PropsToSideBar";
import {TopBarContainer} from "../../components/Navigation/TopBar/TopBarContainer";
import {Breadcrumbs} from "../../components/Navigation/Breadcrumbs";
import {FeaturedPostsContainer} from "../../components/FeaturedPosts/FeaturedPostsContainer";
import {TablePagination} from "../../components/TablePagination/TablePagination";
import {DATA_TABLE, DATA_TABLE_HEADER} from "../../utils/constants/table/dataTablesMock";


export function DataTables({label, url, subLabel, subUrl, isRaised, nav}: IPageProps) {
    return (
        <>
            {nav ? <PropsToSideBar navKey={nav}/> : ''}
            <main className={"content"}>
                <div className={"top-bar"}>
                    <TopBarContainer/>
                    <Breadcrumbs label={label} url={url} subLabel={subLabel} subUrl={subUrl}/>
                    <FeaturedPostsContainer/>
                </div>
                <div className={`page ${isRaised ? 'raised' : ''}`}>
                    <div className={"container"}>
                        <div className="row">
                            <div className="col-12">
                                <div className="card border-light">
                                    <div className="card-body">
                                        <h4 className={"card-title"}>
                                            {label}
                                        </h4>
                                        <p className="card-text">
                                            This is an example of datatable using the well known datatables.net plugin.
                                            This is a minimal setup in order to get started fast.
                                        </p>
                                    </div>
                                </div>
                                <TablePagination
                                    itemsPerView={5}
                                    tableHeader={DATA_TABLE_HEADER}
                                    tableRow={DATA_TABLE}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}