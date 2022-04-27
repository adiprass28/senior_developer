import React from 'react'

type Props = {
  id: number
  name: string 
  username?: string 
  email: string 
}

const Card = ({ id, name, username, email }: Props) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img style={{height: 225, width: 225}} alt="robots" src={`https://robohash.org/${id}`} />
      <div className='tc'> 
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
