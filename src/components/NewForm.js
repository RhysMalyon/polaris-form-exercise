import React, { useCallback, useState } from 'react';
import {
  Button,
  FormLayout,
  TextField,
  Select,
  DatePicker
} from '@shopify/polaris';

import lunarisData from '../data/lunarisData';

function NewForm() {
  const userData = useState(lunarisData[0])

  const [isEditing, setIsEditing] = useState(false);

  const [firstName, setFirstName] = useState(userData[0].first_name);
  const handleFirstNameChange = useCallback((newValue) => setFirstName(userData[0].first_name = newValue), []);

  
  const [lastName, setLastName] = useState(userData[0].last_name);
  const handleLastNameChange = useCallback((newValue) => setLastName(userData[0].last_name = newValue), []);

  const [address, setAddress] = useState(userData[0].address);
  const handleAddresssChange = useCallback((newValue) => setAddress(userData[0].address = newValue), []);


  const [gender, setGender] = useState(userData[0].gender);
  const handleGenderChange = useCallback((newValue) => setGender(userData[0].gender = newValue), []);

  const genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Unknown', value: 'unknown'},
    {label: 'Prefer Not To Say', value: 'preferNotToSay'},
  ]

  function genderReference() {
    genderOptions.forEach(gender => {
      if(gender.value === userData[0].gender) {
        return gender.value
      }
    })
    return genderOptions[2].value
  }
  
  // const [birthday, setBirthday] = useState(new Date(userData[0].birthday));
  // const handleBirthdayChange = useCallback((newValue) => setBirthday(newValue), []);
  const [{month, year}, setDate] = useState({month: birthMonth, year: birthYear});
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(birthday),
    end: new Date(birthday),
  });
  
  const handleBirthdayChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );

  const birthday = new Date(userData[0].birthday)

  const birthMonth = birthday.getMonth()
  const birthYear = birthday.getFullYear()
  

  function handleClick() {
    setIsEditing(!isEditing)
    console.log(userData)
  }

  return (
    <FormLayout>
      <TextField
        label="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
        disabled={!isEditing}
      />
      <TextField
        label="Last name"
        value={lastName}
        onChange={handleLastNameChange}
        disabled={!isEditing}
      />
      <TextField
        label="Address"
        value={address}
        onChange={handleAddresssChange} 
        disabled={!isEditing}
      />
      <Select 
        label="Gender"
        options={genderOptions}
        value={gender}
        onChange={handleGenderChange}
        disabled={!isEditing}
      />
      <DatePicker
        month={birthMonth}
        year={birthYear}
        disabled={!isEditing}
        onChange={setSelectedDates}
        onMonthChange={handleBirthdayChange}
        selected={selectedDates}
      />
      <Button onClick={handleClick}>Edit</Button>
    </FormLayout>
  );
}

// class Form extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       userInfo: lunarisData,
//       birthday: new Date("2008-02-20"),
//       isEditing: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }
  
//   handleClick() {
//     const editStatus = this.setState(prevState => {
//       return {
//         isEditing: !prevState.isEditing
//       }
//     })
//     return {
//       isEditing: editStatus
//     }
//   }

//   handleChange() {newValue => setValue(newValue), []};

//   render() {
//     const date = this.state.birthday.getDate()
//     const month = this.state.birthday.getMonth()
//     const year = this.state.birthday.getFullYear()

//     const genderOptions = [
//       {label: 'Male', value: 'Male'},
//       {label: 'Female', value: 'Female'},
//       {label: 'Prefer Not To Say', value: 'Prefer Not To Say'},
//     ]

//     const editStatus = !this.state.isEditing

//     return (
//       <FormLayout>
//         <TextField
//           label="First name"
//           value={this.state.userInfo[0].first_name}
//           onChange={this.handleChange}
//           disabled={editStatus}
//         />
//         <TextField
//           label="Last name"
//           value={this.state.userInfo[0].last_name}
//           onChange={() => { } }
//           disabled={editStatus}
//         />
//         <TextField
//           label="Address"
//           value={this.state.userInfo[0].address}
//           onChange={() => { } } 
//           disabled={editStatus}
//         />
//         <Select 
//           label="Gender"
//           options={genderOptions}
//           onChange={() => {}}
//           disabled={editStatus}
//         />
//         <DatePicker
//           date={date}
//           month={month}
//           year={year}
//           disabled={editStatus}
//         />
//         <Button onClick={this.handleClick}>Edit</Button>
//       </FormLayout>
//     )
//   }
// }

export default NewForm
