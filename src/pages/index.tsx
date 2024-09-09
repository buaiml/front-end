import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import FadeInSection from '../components/FadeInSection';
import Link from "next/link";
import {format, formatDistanceToNow} from "date-fns";

interface Event {
  id: string;
  name: string;
  description: string;
  location: string | null;
  start_time: number;
  end_time: number;
}

const formatEventDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const formattedDate = format(date, "MMMM do, yyyy 'at' h:mma");
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });
  return `${formattedDate} (${relativeTime})`;
};

const Home: React.FC = () => {
  const [nextEvent, setNextEvent] = useState<Event | null>(null);

  useEffect(() => {
    const fetchNextEvent = async () => {
      try {
        const response = await fetch("/api/event_fetcher");
        if (response.ok) {
          const events: Event[] = await response.json();
          const now = Date.now() / 1000;
          //const nextEvent = events.find((event) => event.start_time > now);
          const nextEvent = events[0];
          setNextEvent(nextEvent || null);
        }
      } catch (error) {
        console.error("Failed to fetch next event:", error);
      }
    };

    fetchNextEvent();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-8 py-24 space-y-16 flex items-center justify-center">
        <FadeInSection>
          <h1 className="text-4xl font-mono font-extrabold mb-8 text-white">Boston University AI/ML Club</h1>
        </FadeInSection>
      </div>

      <div className="grid md:grid-cols-3 px-48">
        <FadeInSection>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-mono font-bold mb-4 text-white">About Us</h2>
            <p className="text-white font-mono">
              The Boston University AI/ML Club is a student-run organization dedicated to teaching the BU community
              to build their own models and projects. Join our discord to get involved!
            </p>
            <Link href="https://discord.gg/8Gf3vJ7" className="text-blue-300 hover:text-blue-100 transition duration-300">
              Join our Discord →
            </Link>
          </div>
        </FadeInSection>

        <div>{/*empty*/}</div>

        <FadeInSection>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-mono font-bold mb-4 text-white">
              {nextEvent ? 'Upcoming Event' : 'Events'}
            </h2>
            {nextEvent ? (
              <div className="p-4">
                <h3 className="text-xl font-mono font-medium text-white mb-2">{nextEvent.name}</h3>
                <p className="text-white font-mono mb-4">{nextEvent.description}</p>
                <p className="text-white font-mono">
                  Date: {formatEventDate(nextEvent.start_time)}
                </p>
                <p className="text-white font-mono mb-4">
                  Location: {nextEvent.location || "TBD"}
                </p>
                <Link href="/events" className="text-blue-300 hover:text-blue-100 transition duration-300">
                  View all events →
                </Link>
              </div>
            ) : (
              <p className="text-white">
                No upcoming events at the moment.
                <Link href="/events" className="text-blue-300 hover:text-blue-100 transition duration-300 ml-2">
                  Check out our past events →
                </Link>
              </p>
            )}
          </div>
        </FadeInSection>
      </div>
    </Layout>
  );
};

export default Home;
