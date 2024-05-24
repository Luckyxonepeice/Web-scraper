import type { Metadata } from 'next'
import Top from './components/Top';
 
export const metadata: Metadata = {
  title: 'AniWorld',
  description: "Get knowledge about Latest Anime trends"
}

export default function Home() {
  return (
    <div>
      <Top/>
    </div>
  );
}
