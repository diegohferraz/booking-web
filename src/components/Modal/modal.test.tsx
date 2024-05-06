import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '.'

const mockTitle = 'Testing modal'
const mockChildren = <p>test modal content</p>

describe('Modal', () => {
  it('should render modal when isShowing is true', () => {
    render(
      <Modal
        isShowing={true}
        onHide={() => {}}
        title={mockTitle}
        children={mockChildren}
      />
    )

    expect(screen.getByText(mockTitle)).toBeInTheDocument()
    expect(screen.getByText(mockChildren.props.children)).toBeInTheDocument()
  })

  it('should not render modal when isShowing is false', () => {
    render(
      <Modal
        isShowing={false}
        onHide={() => {}}
        title="Title"
        children={<p>Content</p>}
      />
    )

    expect(screen.queryByText('Title')).not.toBeInTheDocument()
  })

  it('should call onHide prop when clicking on modal background', () => {
    const mockHideFn = vi.fn()
    render(
      <Modal
        isShowing={true}
        onHide={mockHideFn}
        title="Title"
        children={<p>Content</p>}
      />
    )

    const modalBackground = screen.getByRole('presentation')
    fireEvent.click(modalBackground)

    expect(mockHideFn).toHaveBeenCalledTimes(1)
  })

  it('should call onHide prop when clicking close button', () => {
    const mockHideFn = vi.fn()
    render(
      <Modal
        isShowing={true}
        onHide={mockHideFn}
        title="Title"
        children={<p>Content</p>}
      />
    )

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)

    expect(mockHideFn).toHaveBeenCalledTimes(1)
  })
})
