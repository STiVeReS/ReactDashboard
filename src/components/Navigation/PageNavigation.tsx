import React from 'react'


interface IProps {
    label?: string
    page?: string
}

export function PageNavigation({label, page}: IProps) {
    return (
        <div className={"container page-nav"}>
            <div className={"row"}>
                <div className={"col-12 col-md-6"}>
                    <div className={"page-nav__inner"}>
                        <h6 className={"page-nav__label"}>{label}</h6>
                        <ul className={"page-nav__breadcrumbs"}>
                            <li>{page}</li>
                            <li>{page}</li>
                        </ul>
                    </div>
                </div>

                <div className={"col-12 col-md-6"}>
                    <div>
                        Login
                    </div>
                </div>

            </div>
        </div>
    )
}