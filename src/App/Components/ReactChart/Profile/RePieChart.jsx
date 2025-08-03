import axios from "axios"
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

export default function RePieChart() {
  const [data, setData] = useState([]);
  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=194')
      .then(res => {
        setData(res.data.products);
        // Transform data for pie chart
        const categoryCount = res.data.products.reduce((acc, product) => {
          acc[product.category] = (acc[product.category] || 0) + 1;
          return acc;
        }, {});

        const pieData = Object.entries(categoryCount).map(([name, value]) => ({
          name,
          value
        }));
        
        setTransformedData(pieData);
        localStorage.setItem('data', JSON.stringify(res.data.products));
      })
      .catch(err => console.log(err))
  }, [])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19AF', '#19FFAF', '#FFAF19'];
 const categoryColors = {
    'smartphones': '#FF6B6B',
    'laptops': '#4ECDC4',
    'fragrances': '#45B7D1',
    'skincare': '#96CEB4',
    'groceries': '#FFEEAD',
    'home-decoration': '#D4A5A5',
    'furniture': '#9B9B9B',
    'tops': '#FFB6B6',
    'womens-dresses': '#FF9999',
    'womens-shoes': '#FFB6C1',
    'mens-shirts': '#87CEEB',
    'mens-shoes': '#4682B4',
    'mens-watches': '#483D8B',
    'womens-watches': '#9370DB',
    'womens-bags': '#DDA0DD',
    'womens-jewellery': '#DA70D6',
    'sunglasses': '#8B4513',
    'automotive': '#CD853F',
    'motorcycle': '#D2691E',
    'lighting': '#FFD700'
  };

  return (
    <div style={{ width: '100%', height: '100%'}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={transformedData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {transformedData.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={categoryColors[entry.name] || '#808080'} />
            ))}
          </Pie>
        </PieChart>
        <Legend/>
      </ResponsiveContainer>
    </div>
  )
}