import cheerio, { Cheerio, Element } from "cheerio"; 
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
const convert = require("xml-js");


export async function GET(req: NextApiRequest) {
  
  const result = await fetch(`https://api.jikan.moe/v4/top/anime`);

  const {data} = await (result.json());

  return NextResponse.json(data);
}