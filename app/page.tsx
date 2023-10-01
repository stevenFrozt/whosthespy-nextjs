import Image from 'next/image'
import Logo from "@/public/logo.png"
export default function Home() {
  return (
   <main className='bg-gradient-to-t from-violet-800 via-indigo-600 to-fuchsia-600 min-h-screen'>
<Image src={Logo} width={800} height={253} alt='logo' className='w-40'/>
   </main>
  )
}
