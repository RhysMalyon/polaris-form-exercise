import React, { useState, useCallback } from 'react'
import { Select } from '@shopify/polaris';

function GenderSelect(props) {
  const [gender, setGender] = useState(props.userData[0].gender);
  const handleGenderChange = useCallback((newValue) => setGender(props.userData[0].gender = newValue), []);

  const genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Unknown', value: 'unknown'},
    {label: 'Prefer Not To Say', value: 'preferNotToSay'},
  ]

  return (
    <div>
      <Select 
        label="Gender"
        options={genderOptions}
        value={gender}
        onChange={handleGenderChange}
        disabled={!props.isEditing}
        requiredIndicator={true}
      />
    </div>
  )
}

export default GenderSelect
