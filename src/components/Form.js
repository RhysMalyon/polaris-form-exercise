import React from 'react';
import {
  FormLayout,
  TextField,
  Select,
  DatePicker
} from '@shopify/polaris';

import lunarisData from '../data/lunarisData';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "Lunaris",
      lastName: "S.",
      address: "Tokyo, Kichijoji Honcho 1",
      birthday: new Date("2008-02-20"),
      gender: "unknown"
    }
  }

  render() {
    const month = this.state.birthday.getMonth()
    const year = this.state.birthday.getYear()

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
