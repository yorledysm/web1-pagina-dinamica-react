import React from 'react';
import { Navbar } from './ui/Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Inicio } from './componente/Inicio';
import { Nuevo } from './componente/Nuevo';
import { Buscar } from './componente/Buscar';

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

