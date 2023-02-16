import React from "react";

export const Card = (props) => {
    return (
        <div className="card" style={{width: "16.5rem"}}>
            <img src={props.imageUrl}
            className="card-img-top"
            alt="..."
            />
            <div className="card-body" style={{ textAlign: "center" }}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <a href="#" className="btn btn-primary btn-sm" style={{ margin: "auto" }}>
                    Find Out More!
                </a>
            </div>
        </div>
    );
};