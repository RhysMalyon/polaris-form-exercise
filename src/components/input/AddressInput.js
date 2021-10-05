import React, { useState, useCallback } from 'react'
import { TextField } from '@shopify/polaris';

function AddressInput(props) {
  const [address, setAddress] = useState(props.userData[0].address);
  const handleAddressChange = useCallback((newValue) => setAddress(props.userData[0].address = newValue), []);

  return (
    <div>
      <TextField
        label="Address"
        value={address}
        onChange={handleAddressChange} 
        disabled={!props.isEditing}
        requiredIndicator={true}
      />
    </div>
  )
}

export default AddressInput
