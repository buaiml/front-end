import React, {useEffect, useRef, useState} from 'react';
import Layout from '../components/Layout';
import FadeInSection from '../components/FadeInSection';
import SnapScroll from '../components/SnapScroll';
import ScrollDownArrow from '../components/ScrollDownArrow';
import {format} from "date-fns";
import {Head} from "next/document";

interface Event {
  id: string;
  name: string;
  description: string;
  location: string;
  start_time: number;
  end_time: number;
}

const EventItem: React.FC<{ event: Event }> = ({event}) => {
  const startDate = new Date(event.start_time * 1000);
  const endDate = new Date(event.end_time * 1000);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
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

const Home: React.FC = () => {
  const snapScrollRef = useRef<{ scrollTo: (index: number) => void } | null>(null);
  const [nextEvent, setNextEvent] = useState<Event | null>(null);

  const handleScroll = () => {
    if (snapScrollRef.current) {
      snapScrollRef.current.scrollTo(1);
    }
  };

  useEffect(() => {
    const fetchNextEvent = async () => {
      try {
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
              {nextEvent
                ? <EventItem event={nextEvent}/>
                : <h3 className="text-white text-center text-xl sm:text-3xl font-bold font-mono">No upcoming events</h3>
              }
            </FadeInSection>
          </section>
        </SnapScroll>
      </div>
    </Layout>
  );
};

export default Home;
