import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Detailspage from './Components/Detailspage'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/item/:id" element={<Detailspage />} />
            </Routes>
        </div>
    )
}

export default App