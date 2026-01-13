import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const resolvedParams = await params;
    
    console.log("params", resolvedParams)
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${resolvedParams.location}&days=7`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ff58f209f0mshbb1e6ba3815aa20p17902ajsnddd170dac970',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed", { status: 500 })
    }
}
