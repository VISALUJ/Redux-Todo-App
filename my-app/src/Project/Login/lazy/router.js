import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Lazyabout=React.lazy(()=> import ('./lazy'))

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/'element={
        <React.Suspense fallback={<div>Loading</div>}>
            <Lazyabout />
            </React.Suspense>
            } />
        </Routes>
        </BrowserRouter>
    </div>
  )
}



export default Router