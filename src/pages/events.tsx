import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import EventItem, { Event } from '@/components/EventItem';

const Events: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
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

          {isLoading ? (
            <FadeInSection>
              <div className="text-white text-center text-xl sm:text-3xl font-bold font-mono px-4">
                Loading events...
              </div>
            </FadeInSection>
          ) : upcomingEvents.length > 0 ? (
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

          {isLoading ? (
            <FadeInSection>
              <div className="text-white text-center text-xl sm:text-3xl font-bold font-mono px-4">
                Loading events...
              </div>
            </FadeInSection>
          ) : pastEvents.length > 0 ? (
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
