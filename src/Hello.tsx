import React from 'react'
import './Hello.css'
import 'tachyons'

// interface Props {
// name: number
// }

type Props = { name: number }

export default class Hello extends React.Component<Props> {
  render() {
    return (
      <div className="f1 tc">
        <h1 className="title">Hello {this.props.name}</h1>
        <p>React Ninja</p>
      </div>
    )
  }
}

// const Hello: React.FC<HelloProps> = (props) => (
// <div className="f1 tc">
// <h1 className="title">Hello {props.name}</h1>
// <p>React Ninja</p>
// </div>
// )

// export default Hello
