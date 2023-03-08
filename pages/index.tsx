import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallToAction from '@/components/shared-ui/CallToAction'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-fit">
      <Header />
      <main className='w-full h-fit flex flex-col items-center bg-slate-500 pt-16'>
        <Intro />
        <Services />
        <About />
        <Reviews />
        <UserQualifier />
      </main>
      <Footer />
    </div>
  )
}

function Intro() {
  return(
    <section className='w-4/6 h-screen flex flex-row bg-gray-400'>
      <div className="w-3/6 flex justify-center items-center bg-purple-300">
        <div className='w-5/6 h-fit bg-violet-200'>
          <h3 className='text-6xl antialiased font-extrabold'>Accounting you can count on</h3>
          <p className='text-2xl leading-loose'>Get started with a free consultation!</p>
          <CallToAction actionText='Book Now!' />
        </div>
      </div>
      <div className="w-3/6 bg-cyan-300 flex justify-center items-center">
        <img className="max-w-5/6 h-auto" src="/static/images/10x8-wide-example.jpeg" alt="image of Leslie Garcia" />
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className='w-4/6 bg-teal-400 h-screen'>
      <h3 className='h-1/6 flex justify-center items-center text-3xl font-semibold'>Services</h3>
      <div className='w-full h-5/6 flex justify-around items-center'>
        <section className='w-80 h-5/6 bg-green-200 rounded-md'>
          <h4 className='w-full text-center'>Compliance</h4>
          <ul>

          </ul>
        </section>

        <section className='w-80 h-5/6 bg-green-200 rounded-md'>
          <h4 className='w-full text-center'>Management</h4>
          <ul>

          </ul>
        </section>

        <section className='w-80 h-5/6 bg-green-200 rounded-md'>
          <h4 className='w-full text-center'>Advisory</h4>
          <ul>

          </ul>
        </section>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className='w-4/6 bg-green-400 h-screen'>
      <h3 className='w-full flex justify-center items-center'>About Us</h3>
      <div>
        <section className='w-5/6 h/5/6'>
          <img src="/static/images/accountant.jpeg" alt="accounting stock image" />
          <div>

          </div>
        </section>
        <section className='w-5/6 h/5/6'>
          <div>

          </div>
          <img src="/static/images/charity" alt="charity stock image" />
        </section>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className='w-4/6 bg-indigo-400 h-screen'>
      Reviews
    </section>
  )
}

function UserQualifier() {
  return (
    <section className='w-4/6 bg-purple-400 h-screen'>
      User Qualifier
    </section>
  )
}