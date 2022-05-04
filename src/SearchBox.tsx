import React from 'react'

type SearchProps = {
  searchfield?: string
  searchChange: any
}

const SearchBox = ({ searchfield, searchChange }: SearchProps) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="robots search"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
