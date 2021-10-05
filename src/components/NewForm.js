import React, { useCallback, useState } from 'react';
import {
  Button,
  FormLayout,
  TextField,
  Select
} from '@shopify/polaris';

import lunarisData from '../data/lunarisData';
import NameInput from './NameInput';

function NewForm() {
  const userData = useState(lunarisData[0])

  const [isEditing, setIsEditing] = useState(false);

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

  const [birthday, setBirthday] = useState(userData[0].birthday);
  const handleBirthdayChange = useCallback((newValue) => setBirthday(userData[0].birthday = newValue), []);

  const dateRegEx = '^(19|20)\\\\\\\\d\\\\\\\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$'

  function handleClick() {
    setIsEditing(!isEditing)
    console.log(userData)
  }

  return (
    <FormLayout>
      <NameInput
        userData={userData} 
        isEditing={isEditing}
      />
      <TextField
        label="Address"
        value={address}
        onChange={handleAddresssChange} 
        disabled={!isEditing}
        requiredIndicator={true}
      />
      <Select 
        label="Gender"
        options={genderOptions}
        value={gender}
        onChange={handleGenderChange}
        disabled={!isEditing}
        requiredIndicator={true}
      />
      <TextField
        label="Birthday"
        value={birthday}
        onChange={handleBirthdayChange} 
        disabled={!isEditing}
        pattern={dateRegEx}
        requiredIndicator={true}
        type="date"
      />
      <Button onClick={handleClick}>Edit</Button>
    </FormLayout>
  );
}

export default NewForm
