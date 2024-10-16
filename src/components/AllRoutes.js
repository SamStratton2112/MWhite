import { Routes, Route, Navigate } from 'react-router-dom';
import About from './About';
import Actor from './Actor/Actor';
import Dj from './DJ/Dj';
import Model from './Model/Model';
import Residencies from './Residencies';
import Contact from './Contact';


const AllRoutes = () =>{
    return(
        <Routes>
            <Route exact key="About" path="/" element={<About/>}/>
            <Route exact key="actor" path="/actor" element={<Actor/>}/>
            <Route exact key="dj" path="/dj" element={<Dj/>}/>
            <Route exact key="model" path="/model" element={<Model/>}/>
            <Route exact key="residencies" path="/residencies" element={<Residencies/>}/>
            <Route exact key="contact" path="/contact" element={<Contact/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    )
};

export default AllRoutes;