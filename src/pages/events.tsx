import React from "react";
import Layout from "@/components/Layout";
import EventsList from "@/components/EventsList";


const Events: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 space-y-16">
        <h1>Events</h1>
        <EventsList />
      </div>
    </Layout>
  );
}

export default Events;
