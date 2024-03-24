import React from 'react'
import { moviesPoster } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 px-1'>
      <img alt='Movie Card' src={moviesPoster + posterPath}></img>
    </div>
  )
}

export default MovieCard