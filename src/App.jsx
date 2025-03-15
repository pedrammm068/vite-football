import { BrowserRouter, Route, Routes } from "react-router-dom"
; import Layout from "./Layout";
import Home from "./Pages/Home";
import Spain from "./Pages/Spain";
 export default function App() { 
  return (
    <>
    <BrowserRouter>
  <Layout> 
     <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/spain" element={<Spain />} />
       </Routes> 
        </Layout>
       </BrowserRouter>
    </>
        ) }