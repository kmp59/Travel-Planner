import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BanffPage from './pages/BanffPage'
import GuatemalaPage from './pages/GuatemalaPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"         element={<HomePage />} />
                <Route path="/banff"    element={<BanffPage />} />
                <Route path="/guatemala" element={<GuatemalaPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App