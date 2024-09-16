import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { format } from 'date-fns';

interface Event {
  id: string;
  name: string;
  description: string;
  location: string;
  start_time: number;
  end_time: number;
}

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  const startDate = new Date(event.start_time * 1000);
  const endDate = new Date(event.end_time * 1000);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
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
            <p className="text-gray-400 text-sm sm:text-lg">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/event_fetcher');
        if (response.ok) {
          const fetchedEvents: Event[] = await response.json();
          const upcomingEvents = fetchedEvents.filter(event => event.start_time > Date.now() / 1000);
          setEvents(upcomingEvents);
        }
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
        <div className="pt-24 pb-16">
          <FadeInSection>
            <h1 className="text-white text-center font-mono font-extrabold mb-12 w-full px-4" style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1.1'
            }}>
              Upcoming Events
            </h1>
          </FadeInSection>

          {events.length > 0 ? (
            events.map((event, index) => (
              <FadeInSection key={event.id} delay={index * 200}>
                <EventItem event={event} />
              </FadeInSection>
            ))
          ) : (
            <FadeInSection>
              <h3 className="text-white text-center text-xl sm:text-3xl font-bold font-mono">No upcoming events... Check back soon!</h3>
            </FadeInSection>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Events;
