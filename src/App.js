import React from 'react'
import Iframe from './Iframe'
import Nav from './Nav'
import Posts from './Posts'
import SidebarLeft from './SidebarLeft'

const App = () => {
    return (
        <div className="app-container">
            <Nav/>
            <div className="app">
                <SidebarLeft className="SidebarLeft"/>
                <Posts className="Posts"/>
                <Iframe className="iframe"/>
            </div>
        </div>
    )
}

export default App
