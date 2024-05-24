import cheerio, { Cheerio, Element } from "cheerio"; 
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const url = "https://www.cbr.com/category/anime-news/"

type newTitleInfo =  {
    title:string,
    url:string,
    detail?:string,
    img_url?:string
}

export async function GET(req: NextApiRequest){
    
    
    const response = await fetch(url,{cache:'no-cache'});

    const html = await response.text();

    const $ = cheerio.load(html);

    const newsInfo: Cheerio<Element>= $('.display-card-excerpt');
    const newsTitle: Cheerio<Element>= $('.display-card-title a');
    const newsImage: Cheerio<Element>= $('.w-img  img');

    const newsDetail : newTitleInfo[]=[];
    
    newsTitle.each((index,element) => {
        
        const title :string = ($(element).text());
        const url:string = ($(element).attr('href')) as string;

        newsDetail.push({
            title:title,
            url:url
        })
    });

    newsInfo.each( (index, element)=>{

        const detail :string = $(element).text();
        
        const oldDetail : newTitleInfo= newsDetail[index];

        const newDetail : newTitleInfo = {
            ...oldDetail,
            detail:detail,
        }

        newsDetail[index]= newDetail;
    })

    newsImage.each( (index, element)=>{
        const img_url = $(element).attr('src');
        const oldDetail : newTitleInfo= newsDetail[index];
        const newDetail : newTitleInfo = {
            ...oldDetail,
            img_url:img_url
        }

        newsDetail[index]= newDetail;
    })
    
    // console.log(newsDetail)
    
    return  NextResponse.json(newsDetail)
}
