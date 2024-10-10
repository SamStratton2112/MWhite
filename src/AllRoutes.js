import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home'

const AllRoutes = () =>{
    return(
        <Routes>
            <Route exact key="home" path="/" element={<Home/>} />
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    )
};

export default AllRoutes;