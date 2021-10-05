import React, { useCallback, useState } from 'react';
import {
  Button,
  FormLayout,
  TextField,
  Select
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

      <Button onClick={handleClick}>Edit</Button>
    </FormLayout>
  );
}

export default NewForm
