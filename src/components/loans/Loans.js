import React from 'react'
import { Fragment } from 'react'
import { Button, Input, List } from 'semantic-ui-react'
import axios from 'axios'
import loanArr from '../../loanArr.js'

class Loans extends React.Component {

  constructor() {
    super()
    this.state = {
      loans: []
    }
  }
  
  componentDidMount() {
    this.setState({
      loans: loanArr
    })
  }

  render() {
    return (
      <Fragment>
          <List style={{display: 'inline-block'}}>
            {this.state.loans[0] ? this.state.loans.map((loan, index) => {
              return (
                <List.Item key={index} className="ui card">
                    <h2>{loan.name}</h2>
                    <p>Payment: {loan.payment}</p>
                    <p>APR: {loan.apr}</p>
                    <Button>Take offer</Button>
                </List.Item>
              )
            }) : null}
          </List>
      </Fragment>
    )
  }
}

export default Loans
