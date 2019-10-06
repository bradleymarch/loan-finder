import React from 'react'
import { Fragment } from 'react'
import { Button, Input, Select, List } from 'semantic-ui-react'
import Loans from '../loans/Loans'

class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      showResults: false,
      chosenScore: 'fair',
      lowScore: false
    }
  }
  
  search(event) {
    event.preventDefault()
    const selected_credit_score = event.target.credit_score.value
    if (selected_credit_score !== '') {
      if (selected_credit_score === 'Excellent (750-850)' || selected_credit_score === 'Good (700-749)') {
        this.setState({
          showResults: true,
          lowScore: false
        })
      }
      else this.setState({
        showResults: false,
        lowScore: true
      })
    }
    else alert('Please select a score from the options provided.')
  }
  sendScore(event) {
    const score = event.target.value
    this.setState({
      chosenScore: score
    })
  }
  render() {
    const options = [
      { key: 'excellent', value: 'Excellent (750-850)' },
      { key: 'good', value: 'Good (700-749)' },
      { key: 'fair', value: 'Fair (640-699)' },
      { key: 'needs work', value: 'Needs work (639 or less)' },
    ]
    const lowScoreLoan = [{
      name: 'Loan 3',
      payment: '$85/month',
      apr: '13.49%'
    }]
    return (
      <Fragment>
        <h1 style={{marginTop: '4rem'}}>Loan Finder</h1>
        <form onSubmit={e=>this.search(e)} style={{marginTop: '2rem'}}>
          <Input type="number" placeholder="Loan amount..." value={2500}>
            <label htmlFor="loan_amount" className="ui label" style={{fontSize: '1.5rem'}}>Loan Amount: $</label><input id="loan_amount "/>
            <select defaultValue="" name="credit_score" onChange={e=>this.sendScore(e)}>
              <option value="" disabled>Your Credit Score</option>
              {options.map((option, index) => {
                return (
                  <option key={index}>{option.value}</option>
                )
              })}
            </select>
            <Button type="submit">Search</Button>
          </Input>
        </form>
        {this.state.showResults ? <Loans /> : null}
        {this.state.lowScore ? lowScoreLoan.map((loan, index) => {
          return (
            <List key={index} style={{display: 'inline-block'}}>
              <List.Item key={index} className="ui card">
                  <h2>{loan.name}</h2>
                  <p>Payment: {loan.payment}</p>
                  <p>APR: {loan.apr}</p>
                  <Button>Take offer</Button>
              </List.Item>
            </List>
          )
        }) : null}
      </Fragment>
    )
  }
}

export default Search
