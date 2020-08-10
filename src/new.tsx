import * as React from "react"
import * as ReactDOM from "react-dom"
import { Create } from "./components/Create"

export class Root extends React.Component {
  render() {
    return <Create />
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"))
