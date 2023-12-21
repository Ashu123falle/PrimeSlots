import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../Components/Footer/index'
import BlogCard from '@/Components/blogCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <BlogCard/>
      <Footer/>
    </main>
  )
}
