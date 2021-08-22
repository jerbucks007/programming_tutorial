import React, {useState, useEffect} from "react";
import { Pagination } from 'react-bootstrap';

function KairosPagi (props) {

    var totalPage = parseInt(props.totalPage);
    var currentPage = parseInt(props.currentPage);

    const clicka = function(clicka){
        console.log(clicka)
    }

    return (
        <>
        {props.children}
        <Pagination style={{ justifyContent: "center" }}>
            {
                totalPage > 1 ? (
                    <>
                    {Array(totalPage).fill(1).map((notThis, idx) => {
                        return <Pagination.Item
                            key={idx+1}
                            active={idx+1 === currentPage}
                            onClick={
                                () => {
                                    clicka(this);
                                    props.pageClicked(idx+1);
                                }
                            }
                        >
                        {idx+1}
                        </Pagination.Item>
                    })}
                    </>
                ) : (<></>)
            }
            
        </Pagination>
        </>
    )
}

export default KairosPagi;