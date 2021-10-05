import React, { useCallback, useState } from 'react';
import {
  Button,
  FormLayout,
  TextField,
  Select
} from '@shopify/polaris';

import lunarisData from '../data/lunarisData';

import NameInput from './NameInput';
import AddressInput from './AddressInput';
import GenderSelect from './GenderSelect';

function NewForm() {
  const userData = useState(lunarisData[0])

  const [isEditing, setIsEditing] = useState(false);

  

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
      <AddressInput
        userData={userData} 
        isEditing={isEditing}
      />
      <GenderSelect 
        userData={userData} 
        isEditing={isEditing}
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
