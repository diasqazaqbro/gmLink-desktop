import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PinCode } from '../../../../../features/pin-code'
import { Badges } from '../../../../../shared/ui/Badges/Badges'
import { Contact } from '../../../../../shared/ui/Contact/Contact'
import sass from './VPhone.module.sass'
import { Modal } from '../../../../../shared/ui/Modal'

export const VPhone = () => {
  const { phoneNumber } = useParams<{ phoneNumber: string }>();
  const [timer, setTimer] = useState(60)
  const [showResend, setShowResend] = useState(false);
  const [modalActive, setModalActive] = useState(false);

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

  const toogleModal = (e:React.MouseEvent<HTMLAnchorElement>) => {
    setModalActive(!modalActive);
    e.preventDefault();
  }

  return (
    <>
      <div className={sass.background}>
        <div className={sass.container}>
          <Badges 
            routePath='/registration/sign-phone'
            onClick={toogleModal}
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
              <Contact label='Contact Us' routePath={undefined} />
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <p className={sass.modal__inner}>ПОШЕЛ НАХУЙ ДАНИК</p>
      </Modal>
    </>
  )
}