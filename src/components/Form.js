import React, { useCallback, useState } from 'react';
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
      userInfo: lunarisData,
      birthday: new Date("2008-02-20")
    }
  }
  
  render() {
  const month = this.state.birthday.getMonth()
  const year = this.state.birthday.getYear()

  // const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Prefer Not To Say', value: 'Prefer Not To Say'},
  ]

    return (
      <FormLayout>
        <TextField 
          label="First name"
          value={this.state.userInfo[0].first_name}
          onChange={() => { }}
        />
        <TextField
          label="Last name"
          value={this.state.userInfo[0].last_name}
          onChange={() => { } }
        />
        <TextField
          label="Address"
          value={this.state.userInfo[0].address}
          onChange={() => { } } />
        <Select 
          label="Gender"
          options={options}
          onChange={() => {}}
        />
        <DatePicker
          month={month}
          year={year}
        />
        <button onClick={() => console.log(this.state.userInfo[0].first_name)}>Click me</button>
      </FormLayout>
    )
  }
}


export default Form

// this.state = {
//   firstName: "Lunaris",
//   lastName: "S.",
//   address: "Tokyo, Kichijoji Honcho 1",
//   birthday: new Date("2008-02-20"),
//   gender: "unknown"
// }
