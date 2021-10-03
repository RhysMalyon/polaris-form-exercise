import React from 'react';
import {
  FormLayout,
  TextField,
  Select,
  DatePicker
} from '@shopify/polaris';

class Form extends React.Component {
  constructor() {
    super()
    this.state = { 
      date: new Date()
    }
  }

  render() {
    const month = this.state.date.getMonth()
    const year = this.state.date.getYear()

    return (
      <FormLayout>
        <TextField label="First name" onChange={() => { } } />
        <TextField label="Last name" onChange={() => { } } />
        <TextField label="Address" onChange={() => { } } />
        <Select label="Gender" />
        <DatePicker
          month={month}
          year={year} />
      </FormLayout>
    )
  }
}


export default Form
