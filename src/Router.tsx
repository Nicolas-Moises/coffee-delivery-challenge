import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CheckoutOrder } from './pages/CheckoutOrder';
import { Home } from './pages/Home';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/checkout_order' element={<CheckoutOrder />} />
            </Route>
        </Routes>
    )
}