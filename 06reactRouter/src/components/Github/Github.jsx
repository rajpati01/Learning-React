import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    //handeling APIs
    // const [data, setData] = useState([])
    // useEffect (() =>{
    //     fetch('https://api.github.com/users/rajpati01')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-row'>
    <img src={data.avatar_url} alt="Git picture" width={200}  className='m-4 rounded-full'/>
    <div className='m-3 p-4'>
    <div>Github followers: {data.followers} </div>
    <div>Github following: {data.following} </div>
    </div>
    </div>
    </>
    
  )
}

export default Github

//optimize way to handle API
export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/rajpati01')
    return response.json()
}