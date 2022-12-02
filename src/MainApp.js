import React from 'react';
import { Navbar } from './Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'; 
import { Inicio } from './Inicio';
import { Nuevo } from './Nuevo';
import { Buscar } from './Buscar';

export const MainApp = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='inicio' element={<Inicio />} />
                <Route path='nuevo' element={<Nuevo />} />
                <Route path='buscar' element={<Buscar />} />

                <Route path='*' element={<Navigate to='/inicio' />} />
            </Routes>
        </BrowserRouter>
        
    </>
}

