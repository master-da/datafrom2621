import React from "react";
// import { useEffect, useState } from "react";
import { LineChart, Line } from "recharts";

export default function Graph(){
    const data = [
        {name: 'one', page: 42},
        {name: 'four', page: 29}
    ];

    return <div>
        <LineChart
        width={600} height={400} data={data}>
            <Line type="monotone" dataKey="name"/>
        </LineChart>
    </div>
}