import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineLike} from 'react-icons/ai'

export default function Card({result}) {
    // console.log(result)
  return (
    <div className='cursor-pointer sm:p-3 
    sm:hover:shadow-slate-400 sm:shadow-md rounded-lg
    sm:border sm:border-slate-400 sm:m-2 transition-shadow
    duration-200 group'>
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
            }`} 
            width={500}
            height={300}
            alt={`poster for movie: ${result.original_title}`}
            className='sm:rounded-t-lg group-hover:opacity-80
            transition-opacity duration-200'
            placeholder='blur'
            blurDataURL='/spinner.svg'
            style={{
                maxWidth: '100%',
                height: 'auto',
            }}
        />
        <div className='p-2'>
            <p className='line-clamp-2 text-md'>{result.overview}</p>
            <h2 className='truncate
            text-lg font-bold'>
                {result.title || result.name}
            </h2>
            <p className='flex items-center'>{result.release_date || result.first_air_date}
                < AiOutlineLike className='h-5 mr-1 ml-4'/>
                {result.vote_count}
            </p>
        </div>
        </Link>
    </div>
  )
}

// {
//     adult: false,
//     backdrop_path: '/pxJbfnMIQQxCrdeLD0zQnWr6ouL.jpg',
//     id: 1077280,
//     title: 'Die Hart',
//     original_language: 'en',
//     original_title: 'Die Hart',
//     overview: "Follows a fictionalized version of Kevin Hart, as he tries to become an action movie star. He attends a school run by Ron Wilcox, where he attempts to learn the ropes on how to become one of the industry's most coveted action stars.",     
//     poster_path: '/1EnBjTJ5utgT1OXYBZ8YwByRCzP.jpg',
//     media_type: 'movie',
//     genre_ids: [ 28, 35, 53 ],
//     popularity: 1386.983,
//     release_date: '2023-02-22',
//     video: false,
//     vote_average: 6.679,
//     vote_count: 98
//   }
