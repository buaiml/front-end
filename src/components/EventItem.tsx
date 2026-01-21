import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

export interface Event {
  id: string;
  name: string;
  description: string;
  location: string;
  start_time: number;
  end_time: number;
}

interface EventItemProps {
  event: Event;
  variant?: 'home' | 'list';
}

const formatDateForCalendar = (date: Date): string => {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
};

const generateCalendarUrl = (event: Event): string => {
  const startDate = new Date(event.start_time * 1000);
  const endDate = new Date(event.end_time * 1000);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.name,
    dates: `${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}`,
    location: event.location,
    details: event.description,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const EventItem: React.FC<EventItemProps> = ({ event, variant = 'list' }) => {
  const startDate = new Date(event.start_time * 1000);
  const endDate = new Date(event.end_time * 1000);

  const bgClass = variant === 'home'
    ? 'bg-black bg-opacity-50'
    : 'bg-white bg-opacity-10';

  const wrapperClass = variant === 'home'
    ? 'w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'
    : 'w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8';

  return (
    <div className={wrapperClass}>
      <div className={`${bgClass} backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden`}>
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start font-mono">
          <div className="mb-4 sm:mb-0 sm:mr-8 text-center">
            <div className="text-4xl sm:text-6xl font-bold text-white">{format(startDate, 'd')}</div>
            <div className="text-lg sm:text-xl uppercase text-gray-300">{format(startDate, 'MMM')}</div>
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 sm:mb-4">{event.name}</h3>
            <p className="text-gray-300 text-base sm:text-xl mb-2 sm:mb-4">
              {format(startDate, 'EEE, h:mm a')} – {format(endDate, 'h:mm a')}
            </p>
            <p className="text-gray-300 text-base sm:text-xl mb-2 sm:mb-4">{event.location}</p>
            <p className="text-gray-400 text-sm sm:text-lg mb-4">{event.description}</p>
            <a
              href={generateCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white text-sm transition-all duration-200"
            >
              <Calendar size={16} />
              Add to Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
