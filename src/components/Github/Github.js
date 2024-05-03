import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=> {
    //     fetch(`https://api.github.com/users/developerapu`)
    //     .then(response => response.json())
    //     .then(data=> {
    //         console.log(data);
    //         setData(data);
    //     })
    //  }, [])
    console.log(data)
  return (
    <div className='m-4 bg-gray-600 text-white p-4'>
    <h2 className='text-center  text-3xl'>Github Followers: {data?.followers}
    </h2>
    <div className='flex flex-row items-center w-auto gap-4 justify-around'>
    <img className="w-40" src={data?.avatar_url} alt="" />
    <div className='flex flex-col gap-4 items-center'>
      <p className='text-3xl'>Apurba Ghosh</p>
    <p className='w-80'>{data?.bio}</p>
    </div>
    </div>
    </div>
  )
}

export default Github;