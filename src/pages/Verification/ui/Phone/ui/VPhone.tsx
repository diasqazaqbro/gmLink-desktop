import { memo, useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { PinCode } from '../../../../../features/pin-code'
import { Badges } from '../../../../../shared/ui/Badges/Badges'
import { Contact } from '../../../../../shared/ui/Contact/Contact'
import sass from './VPhone.module.sass'
import { Modal } from '../../../../../shared/ui/Modal'

export const VPhone = memo(() => {
  const { phoneNumber } = useParams<{ phoneNumber: string }>();
  const [timer, setTimer] = useState(60)
  const [showResend, setShowResend] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const handleResendClick = useCallback(() => {
    setTimer(60);
    setShowResend(false);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevCountdown => {
        if (prevCountdown <= 0) {
          setShowResend(true);
          clearInterval(intervalId);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
      <div className={sass.background}>
        <div className={sass.container}>
          <Badges 
            routePath='/registration/sign-phone'
            onClick={() => setModalActive(!modalActive)}
          />
          <div className={sass.inner}>
            <div className={sass.text}>
              <h1>Phone Verification</h1>
              <p>Fill the box with the verification code which was sent to</p>
              <h5>{phoneNumber}</h5>
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
      <Modal active={modalActive} setActive={() => setModalActive(!modalActive)}>
        <p className={sass.modal__inner}>ПОШЕЛ НАХУЙ ДАНИК</p>
      </Modal>
    </>
  )
})
