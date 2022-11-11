
import toast, { Toaster } from 'react-hot-toast';

import React, { useEffect } from 'react'
import { CallDataBaseProvider } from '../../Context/Context';

const Toast = () => {
  const { error, msg, setMsg } = CallDataBaseProvider();

  useEffect(() => {

    if (msg.length >= 1) {
      toast.error(msg)
    }
    if (!msg === "") {
      toast.error('Llenar campos')
    }
    setTimeout(() => {
      setMsg("")
    }, 3000);

  }, [error, msg, setMsg])

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