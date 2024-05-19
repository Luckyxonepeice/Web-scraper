import { NextApiRequest , NextApiResponse} from "next"
import { NextRequest, NextResponse } from "next/server"

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    
    try {
        
        await res.revalidate('/api/news');
        return res.json({ revalidated: true })
      } catch (err) {
        
        return res.status(500).send('Error revalidating')
      }
    
}