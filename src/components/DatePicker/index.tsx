import { Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'
import { SelectSingleEventHandler } from 'react-day-picker'
import { FiCalendar } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

type DatePickerProps = {
  date: Date
  minDate?: Date
  onDateChange: Dispatch<SetStateAction<Date>>
}

const DatePicker = ({ date, minDate, onDateChange }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <FiCalendar className="mr-2 size-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange as SelectSingleEventHandler}
          initialFocus
          fromDate={minDate || new Date()}
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker