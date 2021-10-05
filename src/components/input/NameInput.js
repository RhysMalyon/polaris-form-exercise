import React, { useState, useCallback } from 'react'
import { TextField } from '@shopify/polaris';

function NameInput(props) {
  const [firstName, setFirstName] = useState(props.userData[0].first_name);
  const handleFirstNameChange = useCallback((newValue) => setFirstName(props.userData[0].first_name = newValue), []);


  const [lastName, setLastName] = useState(props.userData[0].last_name);
  const handleLastNameChange = useCallback((newValue) => setLastName(props.userData[0].last_name = newValue), []);

  return (
    <div>
      <TextField
        label="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
        disabled={!props.isEditing}
        requiredIndicator={true}
      />
      <TextField
        label="Last name"
        value={lastName}
        onChange={handleLastNameChange}
        disabled={!props.isEditing}
        requiredIndicator={true}
      />
    </div>
  )
}

export default NameInput
