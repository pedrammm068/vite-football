import { BrowserRouter, Route, Routes } from "react-router-dom"
; import Layout from "./Layout";
import Home from "./Pages/Home";
import Spain from "./Pages/Spain";
import LaligaCauS from "./Pages/LaLigaCup";
 export default function App() { 
  return (
    <>
    <BrowserRouter>
  <Layout> 
     <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/spain" element={<Spain />} />
      <Route path="/spain/Laliga" element={<LaligaCauS />} />

       </Routes> 
        </Layout>
       </BrowserRouter>
    </>
        ) }