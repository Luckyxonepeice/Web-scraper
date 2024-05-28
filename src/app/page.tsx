import type { Metadata } from 'next'
import Top from './components/Top';
import './home.css'
 
export const metadata: Metadata = {
  title: 'AniWorld',
  description: "Get knowledge about Latest Anime trends"
}

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl text-white text-center mt-10'>TOP ANIME</h1>
      <Top url={'https://api.jikan.moe/v4/top/anime'}/>
      <h1 className='text-3xl text-white text-center mt-10'>TOP MANGA</h1>
      <Top url={'https://api.jikan.moe/v4/top/manga'}/>
    </div>
  );
}
