
import toast, { Toaster } from 'react-hot-toast';

import React, { useEffect } from 'react'
import { CallDataBaseProvider } from '../../Context/Context';

const Toast = () => {
  const { error } = CallDataBaseProvider();

  useEffect(() => {

    toast.error('Llenar campos')
  }, [error])
  
  return (
    <>
      {error && (
        <div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>
      )}
    </>
  );
}

export default Toast