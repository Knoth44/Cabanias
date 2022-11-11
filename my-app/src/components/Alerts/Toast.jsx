import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect } from 'react'
import { CallDataBaseProvider } from '../../Context/Context';

const Toast = () => {
  const { error, msg } = CallDataBaseProvider();

  useEffect(() => {

    if (msg) {
      toast.error("Hubo algun error \n Intentar nuevamente!")

    } else {
      toast.error('Llenar campos')
    }


  }, [error, msg])

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