import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './Home.css'
import {QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="container d-flex flex-column justify-content-between fullscreen todo">
      <Header></Header>
        <main className="flex-grow-1">
            <Outlet />
        </main>
        <Footer ></Footer>
    </div> 
    </QueryClientProvider>
  )
}
