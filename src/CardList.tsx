import React from 'react'
import Card from './Card'

const CardList = ({ robots }: { robots: any }) => {
  const CardArray = robots.map((user: any, i: number) => {
    return (
      <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    )
  })
  return <>{CardArray}</>
}

export default CardList
