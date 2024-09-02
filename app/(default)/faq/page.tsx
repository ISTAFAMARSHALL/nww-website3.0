'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the cost of attending a networking lunch?',
      answer: `
        The cost is $100, and all proceeds go directly to the restaurant. NetWorkWise makes no money on this.`,
    },
    {
      question: 'What are the event timings?',
      answer: `
        Our networking lunches take place from 11:59 AM to 2:27 PM. We have a curated day, and it's essential to be on time and stay until the end to get the most out of the experience.`,
    },
    {
      question: 'What if I need to cancel my attendance?',
      answer: `
        If you need to cancel, please notify us at least 72 hours in advance. We understand that unforeseen circumstances may arise, but we appreciate your consideration in allowing us to adjust our arrangements.`,
    },
    {
      question: 'Can I attend a future event if I\'ve previously attended a networking lunch?',
      answer: `
        Absolutely! We welcome repeat attendees. Each event offers new opportunities to connect with different professionals, and we encourage you to continue building your network.`,
    },
    {
      question: 'Can I see the guest list for an upcoming event?',
      answer: `
        We respect the privacy of our attendees, and we don't publicly disclose our guest lists.`,
    },
    {
      question: 'What is the dress code for the networking lunch?',
      answer: `
        Our events do not have a specific dress code. We suggest that you "come as you are." If you received an invitation, we trust your judgment.`,
    },
    {
      question: 'How do I register for a networking lunch?',
      answer: `
        You can email us directly at info@networkwise.com or reach out to us through LinkedIn, our website, or various other social media platforms.`,
    },
    {
      question: 'What can I expect from the networking lunch?',
      answer: `
        Our events are designed to facilitate meaningful connections and conversations. You can expect a structured format, including great dialogue, quality food, and meaningful connections. Most of our lunch attendees walk away with meaningful outcomes.`,
    },
    {
      question: 'Are there any sponsorship opportunities available?',
      answer: `
        Unfortunately, there are no sponsorship opportunities available at this time.`,
    },
    {
      question: 'How do I get to the event location?',
      answer: `
        We provide our attendees with detailed directions to the event location.`,
    },
    {
      question: 'What is the format of the networking lunch?',
      answer: `
        Our events follow a structured format.`,
    },
    {
      question: 'Can I bring a guest or colleague to the networking lunch?',
      answer: `
        We appreciate your enthusiasm for sharing the experience with others! However, to ensure an optimal networking environment, we kindly request that each attendee registers individually.`,
    },
    {
      question: 'How many attendees can I expect at the networking lunch?',
      answer: `
        You can expect 6-8 attendees at every lunch.`,
    },
    {
      question: 'How do I stay updated on upcoming events and news?',
      answer: `
        We recommend following us on social media to stay informed about our events, news, website, and updates.`,
    },
    {
      question: 'Can I volunteer or help with organizing the networking lunch?',
      answer: `
        We appreciate your enthusiasm! While we don't have volunteer opportunities available at this time, we're always looking for ways to improve our events. If you have suggestions or ideas, please don't hesitate to reach out to us.`,
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{ maxWidth: '60%', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#0D1F2D' }}>
      <h1 style={{ marginTop: '50px', textAlign: 'center', fontSize: '36px', marginBottom: '40px', color: '#0D1F2D' }}>
        Frequently Asked Questions
      </h1>
      <div style={{ borderTop: '1px solid #546A7B' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: 'pointer',
                padding: '15px 0',
                fontSize: '28px',
                borderBottom: '1px solid #546A7B',
                transition: 'color 0.3s ease',
                color: activeIndex === index ? '#F4A690' : '#0D1F2D',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {faq.question}
              <span style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <div style={{ padding: '15px 0', fontSize: '20px', lineHeight: '1.6', color: '#546A7B' }}>
                < p style={{ fontSize: '22px'}} >{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
