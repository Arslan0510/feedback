import React from 'react'

const NoContent = ({ title, imgSrc, picWidth, picHeight }) => {
    return (
        <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
            <img src={imgSrc} className="rounded border-0 shadow-lg" style={{
                width: picWidth ?? 150,
                height: picHeight ?? 150,
                objectFit: "cover"
            }} />
            <h4 className="text-secondary pt-5 font-weight-light">
                {title}
            </h4>
        </div>
    )
}

export default NoContent;
