import { render, screen, fireEvent } from '@testing-library/react'

import DatePicker from './index'
import { format } from 'date-fns'

const mockDate = new Date('2023-12-25')

const mockDateChange = vi.fn()

describe('DatePicker', () => {
  it('should render with initial date displayed', () => {
    render(<DatePicker date={mockDate} onDateChange={() => {}} />)

    expect(screen.getByText(format(mockDate, 'PPP'))).toBeInTheDocument()
  })

  it.skip('should call onDateChange when a date is selected in the calendar', () => {
    render(<DatePicker date={new Date()} onDateChange={mockDateChange} />)

    fireEvent.click(screen.getByRole('button'))

    const calendarCell = screen.getAllByRole('gridcell')[1]
    fireEvent.click(calendarCell)

    expect(mockDateChange).toHaveBeenCalledTimes(1)
  })

  it.skip('should disable dates before the minimum date', () => {
    render(
      <DatePicker
        date={mockDate}
        minDate={new Date()}
        onDateChange={() => {}}
      />
    )
    fireEvent.click(screen.getByRole('button'))

    const disabledCells = screen
      .getAllByRole('gridcell')
      .filter((cell) => cell.getAttribute('aria-disabled') === 'true')

    expect(disabledCells.length).toBeGreaterThan(0)
  })
})
