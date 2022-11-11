import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect } from 'react'
import { CallDataBaseProvider } from '../../Context/Context';

const Toast = () => {
  const { error, msg, setError, setAlerta, setMsg,  } = CallDataBaseProvider();

  useEffect(() => {

    if (error) {
      toast.error(msg)
      setTimeout(() => {
        setAlerta(false);
        setError()
        setMsg()
      }, 3000);
    }

  }, [ msg, setAlerta, setError, setMsg, error])

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