import React, {useState, useEffect, SetStateAction} from 'react';
import {useDispatch, useSelector} from "react-redux";

/*
* component
* */
import {TIO_BAR_POSTS} from "../../utils/constants/topBarPosts/topBarPosts";
import {topBarPostsSelector} from "../../store/topBarPosts/selector";
import {topBarPosts} from "../../store/topBarPosts/sagas/topBarPostsAction";
import {ITopBarPosts} from "../../utils/interfaces/topBarPosts";
import {TopBarPost} from "./TopBarPost";


export function TopBarPostsContainer() {

    const {status, posts} = useSelector(topBarPostsSelector);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topBarPosts())
    }, [dispatch]);

    useEffect(() => {
        setData([...posts])
    }, [posts]);


    const renderBlocks = data.length
        ? data.map((item: ITopBarPosts, index) => {
            return (
                <TopBarPost
                    key={index}
                    label={item.label}
                    value={item.value}
                    subValue={item.subValue}
                    subLabel={item.subLabel}
                    icon={item.icon}
                />
            )
        })
        : null


    return (
        <div className={"container-fluid stat-container"}>
            <div className={"row"}>
                {renderBlocks}
            </div>
        </div>

    )
}