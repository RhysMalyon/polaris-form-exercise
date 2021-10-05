import React, { useState, useCallback } from 'react'
import { TextField } from '@shopify/polaris';

function BirthdayInput(props) {
  const [birthday, setBirthday] = useState(props.userData[0].birthday);
  const handleBirthdayChange = useCallback((newValue) => setBirthday(props.userData[0].birthday = newValue), []);

  const dateRegEx = '^(19|20)\\\\\\\\d\\\\\\\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$'

  return (
    <div>
      <TextField
        label="Birthday"
        value={birthday}
        onChange={handleBirthdayChange} 
        disabled={!props.isEditing}
        pattern={dateRegEx}
        requiredIndicator={true}
        type="date"
      />
    </div>
  )
}

export default BirthdayInput
