import React, { useEffect, useState } from 'react';
import { format, isFuture } from 'date-fns';

interface Event {
  id: string;
  name: string;
  description: string;
  location: string;
  start_time: number;
  end_time: number;
}

interface EventsListProps {
  filter?: (event: Event) => boolean;
  maxEvents?: number;
}

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  const startDate = new Date(event.start_time * 1000);
  const endDate = new Date(event.end_time * 1000);

  return (
    <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-4 flex items-start">
      <div className="mr-4 text-center">
        <div className="text-4xl font-bold text-white">{format(startDate, 'd')}</div>
        <div className="text-sm uppercase text-gray-300">{format(startDate, 'MMM')}</div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-white mb-1">{event.name}</h3>
        <p className="text-gray-300 text-sm mb-2">
          {format(startDate, 'EEE, h:mm a')} – {format(endDate, 'h:mm a')}
        </p>
        <p className="text-gray-300 text-sm mb-1">{event.location}</p>
        <p className="text-gray-400 text-sm">{event.description}</p>
      </div>
    </div>
  );
};

const EventsList: React.FC<EventsListProps> = ({ filter, maxEvents }) => {
  const [events, setEvents] = useState<Event[]>([]);

  // Default filter for upcoming events
  const defaultFilter = (event: Event) => isFuture(new Date(event.start_time * 1000));

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/event_fetcher");
        if (response.ok) {
          const fetchedEvents: Event[] = await response.json();
          setEvents(fetchedEvents);
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events
    .filter(filter || defaultFilter)
    .slice(0, maxEvents);

  return (
    <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-4">Events</h2>
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => <EventItem key={event.id} event={event} />)
      ) : (
        <p className="text-gray-300">No events match the current criteria.</p>
      )}
    </div>
  );
};

export default EventsList;