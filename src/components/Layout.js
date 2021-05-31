import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/tailwind.css'




const Layout = (props) => {
    return (
        <div className="text-grey-700 bg-grey-100 font-body">
            <Header />
            {props.children}
            <Footer />

        </div>
    )
}

export default Layout
