import React, { useState } from 'react';
import { Button, FormLayout } from '@shopify/polaris';

import lunarisData from '../data/lunarisData';

import NameInput from './NameInput';
import AddressInput from './AddressInput';
import GenderSelect from './GenderSelect';
import BirthdayInput from './BirthdayInput';

function NewForm() {
  const userData = useState(lunarisData[0])
  const [isEditing, setIsEditing] = useState(false);

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
      <BirthdayInput
        userData={userData} 
        isEditing={isEditing}
      />
      <Button onClick={handleClick}>Edit</Button>
    </FormLayout>
  );
}

export default NewForm
