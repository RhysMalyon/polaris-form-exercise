import React, { useState } from 'react';
import {
  Button,
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
      birthday: new Date("2008-02-20"),
      isEditing: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleClick() {
    const editStatus = this.setState(prevState => {
      return {
        isEditing: !prevState.isEditing
      }
    })
    return {
      isEditing: editStatus
    }
  }

  handleChange() {newValue => setValue(newValue), []};

  render() {
    const date = this.state.birthday.getDate()
    const month = this.state.birthday.getMonth()
    const year = this.state.birthday.getFullYear()

    const genderOptions = [
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'},
      {label: 'Prefer Not To Say', value: 'Prefer Not To Say'},
    ]

    const editStatus = !this.state.isEditing

    return (
      <FormLayout>
        <TextField
          label="First name"
          value={this.state.userInfo[0].first_name}
          onChange={this.handleChange}
          disabled={editStatus}
        />
        <TextField
          label="Last name"
          value={this.state.userInfo[0].last_name}
          onChange={() => { } }
          disabled={editStatus}
        />
        <TextField
          label="Address"
          value={this.state.userInfo[0].address}
          onChange={() => { } } 
          disabled={editStatus}
        />
        <Select 
          label="Gender"
          options={genderOptions}
          onChange={() => {}}
          disabled={editStatus}
        />
        <DatePicker
          date={date}
          month={month}
          year={year}
          disabled={editStatus}
        />
        <Button onClick={this.handleClick}>Edit</Button>
      </FormLayout>
    )
  }
}

export default Form
