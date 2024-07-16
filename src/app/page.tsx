import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <aside className="p-6 w-60 bg-zinc-950">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className=' space-y-5 mt-10'>
            <a href="" className='flex text-xs font-semibold text-zinc-100 gap-2 items-center hover:bg-zinc-500 p-3 rounded-full'>
              <HomeIcon className="h-6 w-6 text-white" /> Home
            </a>
            <a href="" className='flex text-xs font-semibold text-zinc-100 gap-2 items-center hover:bg-zinc-500 p-3 rounded-full'>
              <Search className="h-6 w-6 text-white" /> Search
            </a>
            <a href="" className='flex text-xs font-semibold text-zinc-100 gap-2 items-center hover:bg-zinc-500 p-3 rounded-full'>
              <Library className="h-6 w-6 text-white" /> Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList 1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList 2</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList 3</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList 4</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList 5</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList 6</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList 7</a>
          </nav>

        </aside>

        <main className="p-6 flex-1">
          <div className="flex items-center gap-4">
            <button className='rounded-full bg-black/40 p-2'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-2'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-3'>Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            
          <div className="bg-white/10 cursor-pointer group rounded-md p-3 flex items-center justify-between gap-4 overflow-hidden hover:bg-zinc-400">
                <img src="/assets/capa.jpg" width={120} height={120} className='rounded-md' alt="full fight capa album" />
                <strong>Wasting Light</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full invisible group-hover:visible bg-green-500 text-'>
                  <Play />
                </button>
            </div>

            <div className="bg-white/10 cursor-pointer group rounded-md p-3 flex items-center justify-between gap-4 overflow-hidden hover:bg-zinc-400">
                <img src="/assets/capa.jpg" width={120} height={120} className='rounded-md' alt="full fight capa album" />
                <strong>Wasting Light</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full invisible group-hover:visible bg-green-500 text-'>
                  <Play />
                </button>
            </div>

            <div className="bg-white/10 cursor-pointer group rounded-md p-3 flex items-center justify-between gap-4 overflow-hidden hover:bg-zinc-400">
                <img src="/assets/capa.jpg" width={120} height={120} className='rounded-md' alt="full fight capa album" />
                <strong>Wasting Light</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full invisible group-hover:visible bg-green-500 text-'>
                  <Play />
                </button>
            </div>

            <div className="bg-white/10 cursor-pointer group rounded-md p-3 flex items-center justify-between gap-4 overflow-hidden hover:bg-zinc-400">
                <img src="/assets/capa.jpg" width={120} height={120} className='rounded-md' alt="full fight capa album" />
                <strong>Wasting Light</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full invisible group-hover:visible bg-green-500 text-'>
                  <Play />
                </button>
            </div>

            <div className="bg-white/10 cursor-pointer group rounded-md p-3 flex items-center justify-between gap-4 overflow-hidden hover:bg-zinc-400">
                <img src="/assets/capa.jpg" width={120} height={120} className='rounded-md' alt="full fight capa album" />
                <strong>Wasting Light</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full invisible group-hover:visible bg-green-500 text-'>
                  <Play />
                </button>
            </div>

            <div className="bg-white/10 cursor-pointer group rounded-md p-3 flex items-center justify-between gap-4 overflow-hidden hover:bg-zinc-400">
                <img src="/assets/capa.jpg" width={120} height={120} className='rounded-md' alt="full fight capa album" />
                <strong>Wasting Light</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full invisible group-hover:visible bg-green-500 text-'>
                  <Play />
                </button>
            </div>
            
          </div>
        </main>

      </div>

      <footer className="p-6 bg-zinc-800 border-t border-zinc-700">footer</footer>
    </div>
  )
}
