'use client';

import { useState } from 'react';
import { TESTIMONIALCONTENT } from "@/app/lib/testimonial-content";
import Testimonial from "@/app/components/testimonial";
import Modal from "@/app/components/testimonial-modal";

export default function TestimonialsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
    setIsScrollingPaused(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
    setIsScrollingPaused(false);
  };

  return (
    <section id="testimonials" className="relative">
      <div style={{marginTop: '-100px'}} className="pt-12 md:pt-20">
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div className="group inline-flex w-full flex-nowrap py-12 md:py-20">
            <div
              className={`flex ${isScrollingPaused ? '' : 'animate-[infinite-scroll_120s_linear_infinite]'} items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3`}
            >
              {TESTIMONIALCONTENT.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  onClick={() => openModal(testimonial)}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content.split('.').splice(0, 2).join('.')}...
                </Testimonial>
              ))}
            </div>
            <div
              className={`flex ${isScrollingPaused ? '' : 'animate-[infinite-scroll_120s_linear_infinite]'} items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3`}
              aria-hidden="true"
            >
              {TESTIMONIALCONTENT.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  onClick={() => openModal(testimonial)}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content.split('.').splice(0, 2).join('.')}...
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} style={{ backgroundColor: 'white' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'salmon' }}>
          {selectedTestimonial?.name}
        </h2>
        <div className="text-1xl font-medium mb-4 font-italic" style={{ color: 'salmon' }}>
          {selectedTestimonial?.title}
        </div>
        <p className="text-[#546A7B]" style={{ color: 'black' }}>
          {selectedTestimonial?.content}
        </p>
      </Modal>
      )}
    </section>
  );
}
