import React, { useState } from 'react';
import { Button, FormLayout } from '@shopify/polaris';

import '../styles/index.scss'

import lunarisData from '../data/lunarisData';

import NameInput from './input/NameInput';
import AddressInput from './input/AddressInput';
import GenderSelect from './input/GenderSelect';
import BirthdayInput from './input/BirthdayInput';

function NewForm() {
  const userData = useState(lunarisData[0])
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(!isEditing)
    isEditing ? console.log(userData[0]) : null
  }

  return (
    <div className="container__form">
      <h1>Lunaris Form Exercise</h1>
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
        <Button onClick={handleClick} primary={true}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </FormLayout>
    </div>
  );
}

export default NewForm
