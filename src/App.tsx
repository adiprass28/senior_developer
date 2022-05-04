import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

interface IProps {
  id?: number
}

interface IState {
  robots: object[]
  searchfield: string
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }
  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot: any) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}
