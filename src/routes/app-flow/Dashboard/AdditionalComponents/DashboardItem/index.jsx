import React from 'react'

const DashboardItem = ({ title, children }) => {
    return (
        <>
            <h5 className="font-weight-light mt-3">
                {title}
            </h5>
            {children}
        </>
    )
}

export default DashboardItem;
