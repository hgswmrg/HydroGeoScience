import 'tailwindcss/tailwind.css';
import "@styles/globals.css";

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

export const metadata = {
    title: "HydroGeoScience for Waterhsed Management Research Group",
    description: "Research Website"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="flex flex-col h-screen w-screen">
                <Navbar/>
                <main className=''>
                    {children}
                </main>
                <Footer/>
            </div>
        </body>
    </html>
  )
}

export default RootLayout