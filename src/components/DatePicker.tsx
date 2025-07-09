import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isAfter,
} from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

export interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
  maxDate?: Date;
}

export function DatePicker({
  selectedDate,
  onChange,
  maxDate,
}: Readonly<DatePickerProps>) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-2 px-2 text-primary-foreground dark:text-primary-foreground-dark">
      <button
        type="button"
        onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        className="p-1 hover:bg-[var(--color-primary-hover)] rounded"
      >
        ←
      </button>
      <div className="font-semibold text-lg">
        {format(currentMonth, "MMMM yyyy")}
      </div>
      <button
        type="button"
        onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        className="p-1 hover:bg-[var(--color-primary-hover)] rounded"
      >
        →
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className="text-center text-sm font-medium text-[var(--color-primary-foreground)]"
        >
          {format(addDays(date, i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = addDays(endOfMonth(monthEnd), 6);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isToday = isSameDay(day, new Date());
        const isSelected = selectedDate && isSameDay(day, selectedDate);
        const isCurrentMonth = isSameMonth(day, currentMonth);
        const isDisabled = maxDate && isAfter(day, maxDate);

        days.push(
          <div
            key={day.toISOString()}
            className={`text-center text-sm p-2 rounded-lg transition text-primary-foreground dark:text-primary-foreground-dark 
              ${isSelected ? "bg-secondary dark:bg-secondary-dark" : ""}
              ${!isCurrentMonth ? "text-gray-400" : "text-[var(--color-primary-foreground)]"}
              ${isToday && !isSelected ? "border border-blue-400" : ""}
              ${isDisabled ? "text-gray-400 cursor-not-allowed" : "cursor-pointer hover:bg-blue-100"}
            `}
            onClick={() => {
              if (isDisabled) return;
              onChange(cloneDay);
              setShowCalendar(false);
            }}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toISOString()} className="grid grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="relative flex flex-row justify-start w-full mt-5 mb-5 ">
      <button
        type="button"
        onClick={() => setShowCalendar(!showCalendar)}
        className="cursor-pointer px-4 py-2 border rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-sm text-sm"
      >
        {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Selecionar data"}
      </button>

      <AnimatePresence>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute mt-2 z-10 w-80 p-4 border rounded-lg shadow-lg bg-primary dark:bg-primary-dark text-primary-foreground dark:text-primary-foreground-dark"
          >
            {renderHeader()}
            {renderDays()}
            {renderCells()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
