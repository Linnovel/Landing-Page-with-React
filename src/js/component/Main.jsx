import React from "react";
import { Card } from "./Card.jsx";

const data = [
    {
        imageUrl: "https://images.unsplash.com/photo-1571226596652-17a84cc563d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        title: "Flores"
    },{
        imageUrl: "https://images.unsplash.com/photo-1671882774388-3bc6070ed0f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Vista"
    },{
        imageUrl: "https://images.unsplash.com/photo-1671933800148-3d5c295e0eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
        title: "Ciudad" 
    },{
        imageUrl: "https://images.unsplash.com/photo-1671806332427-5f518712c6be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "cabaña"  
    },
]

export const Main = () => {
    return (
        <main className="d-flex flex-wrap gap-4 p-4 justify-content-center aling-items-center">

            {
                data.map((item, index) => {
                    return (
                        <Card 
                            imageUrl={item.imageUrl}
                            title={item.title}
                            key={index}
                        />
                    )
                })
             }
        </main>
    );
};