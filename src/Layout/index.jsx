import Footer from "../components/Footet";
import Header from "../components/Haeder";

export default function Layout({children }) {
return (
<>
<Header /> 
{children }
<Footer />
</>
)
}