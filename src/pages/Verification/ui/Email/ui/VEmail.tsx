import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PinCode } from '../../../../../features/pin-code'
import { Badges } from '../../../../../shared/ui/Badges/Badges'
import { Contact } from '../../../../../shared/ui/Contact/Contact'
import sass from './VEmail.module.sass'

export const VEmail = () => {
  const { email } = useParams<{ email: string }>();
  const [timer, setTimer] = useState(60)
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));

      if (timer === 0) {
        setShowResend(true);
        clearInterval(intervalId); 
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleResendClick = () => {
    setTimer(60);
    setShowResend(false);
  };

  return (
    <>
      <div className={sass.background}>
        <div className={sass.container}>
          <Badges 
            routePath='/registration/sing-email'
          />
          <div className={sass.inner}>
            <div className={sass.text}>
              <h1>Phone Verification</h1>
              <p>Fill the box with the verification code which was sent to</p>
              <h5>{email}</h5>
              {showResend ? (
                <a onClick={handleResendClick}>Resend</a>
              ) : (
                <h3>Resend ({timer}s)</h3>
              )}
            </div>
            <PinCode />
            <div className={sass.forget}>
              <a href="">Didn’t receive code?</a>
            </div>
            <div className={sass.contact}>
              <Contact label='Contact Us' routePath='/report' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}