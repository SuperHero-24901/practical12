import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import OrdersLayout from './pages/OrdersLayout.jsx'
import CurrentOrders from './pages/CurrentOrders.jsx'
import OrderHistory from './pages/OrderHistory.jsx'
import CancelledOrders from './pages/CancelledOrders.jsx'
export default function App(){return <BrowserRouter><Routes><Route path="/" element={<Navigate to="/orders/current" replace/>}/><Route path="/orders" element={<OrdersLayout/>}><Route index element={<Navigate to="current" replace/>}/><Route path="current" element={<CurrentOrders/>}/><Route path="history" element={<OrderHistory/>}/><Route path="cancelled" element={<CancelledOrders/>}/></Route><Route path="*" element={<div className="p-12 text-center">Page not found · <a className="text-indigo-600 underline" href="/orders/current">Return to orders</a></div>}/></Routes></BrowserRouter>}
