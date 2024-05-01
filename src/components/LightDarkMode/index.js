// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMOde extends Component {
  state = {isDarkMode:true}

  onChangeMode = () => {
      this.setState(prevState=>({isDarkMode:!prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode?"Dark Mode":"Light Mode"
    const buttonText = isDarkMode?"Light Mode":"Dark Mode"
    return (
      <div className="light-dark-app-container">
        <div className="light-dark-container">
          <h1 className="light-dark-heading">Click To Change Mode</h1>
          <button type="button" className="light-dark-button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMOde
