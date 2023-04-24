import { Routes, Route } from 'react-router-dom'
import { Homepage } from './Pages/Homepage'
import { CompleteOrder } from './Pages/CompleteOrder'
import { DefaultLayout } from './DefaultLayout'
import { OrderConfirmedPage } from './Pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="CompleteOrder" element={<CompleteOrder />} />
        <Route path="OrderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}
