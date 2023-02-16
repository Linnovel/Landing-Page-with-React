import React from "react";

export const Jumbotron = (props) => {

    return (
        <div className="container bg-light p-4">
            <div className="jumbotron bg-light">
                <h1 className="display-5">A Warm Welcome!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum eum soluta corrupti recusandae rem consequatur quia sit amet, accusantium aut quidem cum dolore nihil, ex deserunt nostrum. Ducimus, omnis.</p>
                <p className="lead">
                <a className="btn btn-primary btn-sm" href="#" role="button">Action!</a>
                </p> 
            </div>
        </div>
    );
};
