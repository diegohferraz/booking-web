import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import StaysList from '.'
import StaysItem from './StaysItem'

const mockStays = [
  {
    id: 1,
    name: 'Cozy house',
    address: 'Street 1, Brotas',
    image: 'derick-mckinney-veyLBev-c4c-unsplash.jpg',
    price: 200.0
  },
  {
    id: 2,
    name: 'Stay close to the beach',
    address: 'Street 21, Ubatuba',
    image: 'durian-bullet-JCMQo028t3Q-unsplash.jpg',
    price: 320.0
  }
]

describe('StaysList', () => {
  it('should render list of stays', () => {
    render(<StaysList stays={mockStays} onBookStay={() => {}} />)

    expect(screen.getAllByRole('listitem').length).toBe(mockStays.length)
  })

  it('should call onBookStay prop when clicking book button', () => {
    const mockBookStayFn = vi.fn()
    render(<StaysList stays={mockStays} onBookStay={mockBookStayFn} />)

    const firstStayBookButton = screen.getAllByRole('button')[0]
    fireEvent.click(firstStayBookButton)

    expect(mockBookStayFn).toHaveBeenCalledWith(mockStays[0].id)
  })
})

describe('StaysListItem', () => {
  it('should render stay information', () => {
    render(<StaysItem {...mockStays[0]} onBookStay={() => {}} />)
    const image = screen.getByRole('img') as HTMLImageElement

    expect(screen.getByText(mockStays[0].name)).toBeInTheDocument()
    expect(screen.getByText(mockStays[0].address)).toBeInTheDocument()
    expect(screen.getByText(`$${mockStays[0].price}.00`)).toBeInTheDocument()
    expect(image.src).toBe(`/stays/${mockStays[0].image}`)
  })

  it('should call onBookStay prop when clicking book button', () => {
    const mockBookStayFn = vi.fn()
    render(<StaysItem {...mockStays[0]} onBookStay={mockBookStayFn} />)

    const bookButton = screen.getByRole('button')
    fireEvent.click(bookButton)

    expect(mockBookStayFn).toHaveBeenCalledTimes(1)
  })
})
