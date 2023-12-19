import React, { ReactNode } from 'react'
import modal from './Modal.module.sass'

interface ModalProps {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode
}

export const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
    return (
        <div className={`${active ? modal.active : modal.modal}`} onClick={() => setActive(false)}>
            <div className={modal.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}