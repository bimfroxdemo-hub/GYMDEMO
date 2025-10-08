import React from 'react'
import { FaCalendar, FaRegClock } from "react-icons/fa";

const schedule = [
    { day: "Monday", classes: ["HIIT - 6:00 AM", "Yoga - 10:00 AM", "CrossFit - 6:00 PM", "Zumba - 7:30 PM"] },
    { day: "Tuesday", classes: ["Strength Training - 6:00 AM", "Cardio Blast - 12:00 PM", "Boxing: 6:00 PM"] },
    { day: "Wednesday", classes: ["Yoga Flow - 7:00 AM", "HIIT - 5:00 PM", "Nutrition Workshop - 7:00 PM"] },
    { day: "Thursday", classes: ["CrossFit - 6:00 AM", "Pilates - 10:00 AM", "Strength & Conditioning - 6:00 PM"] },
    { day: "Saturday", classes: ["Yoga - 8:00 AM", "Group Cycling - 10:00 AM", "CrossFit - 4:00 PM"] },
    { day: "Friday", classes: ["Bootcamp - 6:00 AM", "Zumba - 12:00 PM", "HIIT - 6:00 PM"] },
    { day: "Sunday", classes: ["Recovery Yoga - 9:00 AM", "Open Gym - All Day"] },
];

const Schedule = () => {
  return (
    <section className='py-15 px-4 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>

        {/* WEEKLY SECTION */}
        <div className='text-center'>
          <h2 className='text-4xl md:text-5xl font-extrabold'>
            WEEKLY <span className='text-4xl md:text-5xl text-green-500'>SCHEDULE</span>
          </h2>
          <div className='w-24 h-1 bg-green-500 mx-auto mb-6 mt-8'></div>
          <p className='text-lg text-gray-700'>
            Plan your week with our diverse class schedule.
          </p>
        </div>

        {/* SCHEDULE GRID */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-10'>
          {schedule.map((day, index) => (
            <div 
              key={index}
              className='relative border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400'
            >
              {/* Soft Green Glow on Hover */}
              <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-200/40 via-green-200/30 to-green-200/40 blur-3xl"></div>

              <div className='flex items-center gap-3 mb-4 relative z-10'>
                <FaCalendar className='text-green-500 text-xl'/>
                <h3 className='text-xl text-gray-700 font-semibold'>{day.day}</h3>
              </div>
              <ul className='space-y-3 relative z-10'>
                {day.classes.map((classItem, classIndex) => (
                  <li 
                    key={classIndex}
                    className='flex gap-2 text-gray-600 text-sm'
                  >
                    <FaRegClock className='text-green-500 mt-0.5 text-base flex-shrink-0' />
                    <span>{classItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Schedule;
