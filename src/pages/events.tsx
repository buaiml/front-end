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
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/event_fetcher');
        if (response.ok) {
          const fetchedEvents: Event[] = await response.json();
          const now = Date.now() / 1000;

          const upcoming = fetchedEvents
            .filter(event => event.start_time > now)
            .sort((a, b) => a.start_time - b.start_time);

          const past = fetchedEvents
            .filter(event => event.end_time <= now)
            .sort((a, b) => b.end_time - a.end_time); // Sort so most recent past events show first

          setUpcomingEvents(upcoming);
          setPastEvents(past);
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
          {/* Upcoming Events */}
          <FadeInSection>
            <h1
              className="text-white text-center font-mono font-extrabold mb-12 w-full px-4"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                lineHeight: '1.1'
              }}
            >
              Upcoming Events
            </h1>
          </FadeInSection>

          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <FadeInSection key={event.id} delay={index * 200}>
                <EventItem event={event} />
              </FadeInSection>
            ))
          ) : (
            <FadeInSection>
              <h3 className="text-white text-center text-xl sm:text-3xl font-bold font-mono px-4 max-w-sm mx-auto">
                No upcoming events... Check back soon!
              </h3>
            </FadeInSection>
          )}

          {/* Separator before Past Events, with controlled width and padding for mobile */}
          <FadeInSection>
            <div className="my-16 flex items-center justify-center px-4 max-w-sm mx-auto text-center">
              <hr className="border-gray-300 border-t w-1/4 opacity-50 mr-2" />
              <span className="text-white font-mono whitespace-nowrap">Past Events</span>
              <hr className="border-gray-300 border-t w-1/4 opacity-50 ml-2" />
            </div>
          </FadeInSection>

          {pastEvents.length > 0 ? (
            pastEvents.map((event, index) => (
              <FadeInSection key={event.id} delay={index * 200}>
                <EventItem event={event} />
              </FadeInSection>
            ))
          ) : (
            <FadeInSection>
              <h3 className="text-white text-center text-xl sm:text-3xl font-bold font-mono px-4 max-w-sm mx-auto">
                No past events yet!
              </h3>
            </FadeInSection>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Events;
