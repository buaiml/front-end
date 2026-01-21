import React, {useEffect, useRef, useState} from 'react';
import Layout from '../components/Layout';
import FadeInSection from '../components/FadeInSection';
import SnapScroll from '../components/SnapScroll';
import ScrollDownArrow from '../components/ScrollDownArrow';
import EventItem, { Event } from '../components/EventItem';

const Home: React.FC = () => {
  const snapScrollRef = useRef<{ scrollTo: (index: number) => void } | null>(null);
  const [nextEvent, setNextEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = () => {
    if (snapScrollRef.current) {
      snapScrollRef.current.scrollTo(1);
    }
  };

  useEffect(() => {
    const fetchNextEvent = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/event_fetcher');
        if (response.ok) {
          const fetchedEvents: Event[] = await response.json();
          const upcomingEvents = fetchedEvents.filter(event => event.start_time > Date.now() / 1000);
          if (upcomingEvents.length > 0) {
            setNextEvent(upcomingEvents[0]);
          }
        }
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNextEvent();
  }, []);

  return (
    <Layout>
      <div className="h-screen w-screen overflow-hidden">
        <SnapScroll ref={snapScrollRef}>
          <section
            className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h1 className="text-white text-center font-mono font-extrabold mb-8 w-full" style={{
                fontSize: 'clamp(3rem, 10vw, 10rem)',
                lineHeight: '1.1'
              }}>
                AI Society
              </h1>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div
                className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-lg max-w-2xl w-full">
                <FadeInSection delay={600}>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white font-mono">About Us</h2>
                </FadeInSection>
                <FadeInSection delay={900}>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg font-mono">
                    Boston University's AI Society: A community of students passionate about artificial intelligence and
                    machine learning. We host workshops, events, and projects to help students learn and grow in the
                    field
                    of AI.
                  </p>
                </FadeInSection>
              </div>
            </FadeInSection>
            <ScrollDownArrow onScroll={handleScroll}/>
          </section>

          <section
            className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-indigo-900 to-purple-900 px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <h2 className="text-white text-center font-mono font-extrabold mb-8 w-full" style={{
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                lineHeight: '1.1'
              }}>
                Upcoming Events
              </h2>
            </FadeInSection>

            <FadeInSection>
              {isLoading ? (
                <div className="text-white text-center text-xl sm:text-3xl font-bold font-mono">Loading events...</div>
              ) : nextEvent ? (
                <EventItem event={nextEvent} variant="home" />
              ) : (
                <h3 className="text-white text-center text-xl sm:text-3xl font-bold font-mono">No upcoming events</h3>
              )}
            </FadeInSection>
          </section>
        </SnapScroll>
      </div>
    </Layout>
  );
};

export default Home;
