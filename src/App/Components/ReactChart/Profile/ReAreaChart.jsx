import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const cardinal = curveCardinal.tension(0.2);

function ReAreaChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);
console.log(data)
    return (
        <div className='w-full h-full m-0 '> {/* Add container with fixed height */}
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" /> {/* Changed to title for better x-axis labels */}
                    <YAxis  dataKey={'id'}/>
                    <Tooltip />
                    <Area 
                        type="monotone" 
                        dataKey="stock" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.3} 
                    />
                    <Area 
                        type="monotone" // Fixed type prop
                        dataKey="discountPercentage" 
                        stroke="#82ca9d" 
                        fill="aqua" 
                        fillOpacity={0.3} 
                    />
                       <Area 
                        type="monotone" // Fixed type prop
                        dataKey="rating" 
                        stroke="#82ca9d" 
                        fill="blue" 
                        fillOpacity={0.3} 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ReAreaChart;