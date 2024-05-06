import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'

type ModalProps = {
  isShowing: boolean
  onHide: () => void
  title: string
  children: ReactNode
}

const Modal = ({ isShowing, onHide, title, children }: ModalProps) => {
  return isShowing
    ? createPortal(
        <div
          className="fixed left-0 top-0 z-40 h-screen w-screen bg-black/50"
          role="presentation"
          onClick={onHide}
        >
          <div className="fixed left-0 top-0 z-50 flex size-full items-center overflow-y-auto overflow-x-hidden">
            <div
              className="relative z-50 mx-auto w-3/4 max-w-xl bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex justify-between border-b pb-4">
                <h4 className="text-lg">{title}</h4>
                <button
                  type="button"
                  className="size-6 cursor-pointer font-bold"
                  onClick={onHide}
                >
                  <FiX />
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null
}

export default Modal
