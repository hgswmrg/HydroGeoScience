import 'tailwindcss/tailwind.css';
import "./globals.css";

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
            <div className="flex flex-col h-full w-screen">
                <Navbar/>
                <main className='w-screen'>
                    {children}
                </main>
                <Footer/>
            </div>
        </body>
    </html>
  )
}

export default RootLayout