import './App.css'
import Header from "./components/Header"
import {Link} from "react-router-dom"
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main className='container'>
        <div className='d-flex justify-content-center'>
          <img className='my-4' src='https://placehold.co/1200x400' alt='Home-Image'/>
        </div>
        <section className='text-center my-3'>
          <h2 className='pt-3'>Shopie</h2>
          <p>Welcome to the Shopie application!</p>
          <Link to="/products" className='btn btn-primary'>Browse products</Link>
        </section>

        <section className='text-center my-5'>
        <h2 className='pt-3'>Trending</h2>
        <p>Check out our trending products</p>
          <div className='row'>
            <div className='col-md-4 my-3'>
              <img src='https://placehold.co/300' alt='Trending Image 1' />
            </div>

            <div className='col-md-4 my-3'>
              <img src='https://placehold.co/300' alt='Trending Image 2' />
            </div>

            <div className='col-md-4 my-3'>
              <img src='https://placehold.co/300' alt='Trending Image 3' />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
