import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observer for smooth fade-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gray-50">
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            VISIT <span className="text-green-500">US</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop by and see our world-class facilities
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Address Card */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-300 duration-500">
            <div className="bg-green-100 p-4 rounded-lg text-green-500 flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:scale-110">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600 leading-relaxed">
                123 Fitness Street
                <br />
                Omkar Plaza
                <br />
                Surat, Gujarat 395023
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <a
            href="tel:+918401809966"
            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-300 duration-500 cursor-pointer"
          >
            <div className="bg-green-100 p-4 rounded-lg text-green-500 flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:scale-110">
              <FaPhoneAlt className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                +91 9998661998
              </p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:bimfrox@gmail.com"
            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-300 duration-500 cursor-pointer"
          >
            <div className="bg-green-100 p-4 rounded-lg text-green-500 flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:scale-110">
              <FaEnvelope className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                bimfrox@gmail.com
              </p>
            </div>
          </a>

          {/* Hours Card */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-300 duration-500">
            <div className="bg-green-100 p-4 rounded-lg text-green-500 flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:scale-110">
              <FaClock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                Monday - Friday: 5:00 AM - 11:00 PM
                <br />
                Saturday - Sunday: 6:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Google Map with Rounded Corners */}
      <div className="w-full h-[600px] relative rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.987!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzUyLjgiTiA3M8KwNTknMTMuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="FitCore Gym Location"
        />
      </div>
    </section>
  );
};

export default Contact;
