import React from 'react'
import { FcQuestions, FcAnswers } from 'react-icons/fc';
import { AiFillDownCircle } from "react-icons/ai";
import Head from 'next/head'

const faq = () => {
  return (
    <div className='container m-auto min-h-screen'>
      <Head>
      <title>faq-a4appoint</title>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      <link rel="icon" href="/rk1.ico" />
    </Head>
        <div className="space-y-4">
  <details className="group" open>
    <summary
      className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
    >
      <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcQuestions className="w-6 h-6 mx-2 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900">What is a4appoint and how do I use it?.</span>
                    </p>
                    <AiFillDownCircle className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 text-green-500 group-open:-rotate-180"/>
     
    </summary>

    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcAnswers className="w-6 h-6 mx-6 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900 ">Once you have found the doctor on a4appoint online appointment scheduling platform, to get the confirmed appointment just follow these simple steps :-
                        <br className=" md:block" />
                        ➤ Check out their availability by looking at the calendar on their a4appoint.
                        <br className=" md:block" />
                        ➤ Select the date and time when you want to book an appointment .
                        <br className=" md:block" />
                        ➤ A confirmed appointment is provided after making the payment through online channels.
                        <br className=" md:block" />
                        ➤ Reminder notifications (both sms / email) are sent inorder to make sure scheduling goes smoothly.
                        <br className=" md:block" />
                        ➤ It takes about 30 seconds on average to complete an online appointment request. You will thereafter receive a detailed email about your requested a4appoint appointment.

                        </span>
                    </p>

   
  </details>

  <details className="group">
    <summary
      className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
    >
      <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcQuestions className="w-6 h-6 mx-2 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900">Can I make the schedule an online appointment and pay later on ?</span>
                    </p>
                    <AiFillDownCircle className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 text-green-500 group-open:-rotate-180"/>
    </summary>

    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcAnswers className="w-6 h-6 mx-6 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900 ">We do not provide this facility at the moment. Our aim is to assist you in obtaining a confirmed appointment with a doctor on a selected time slot and date

                        </span>
                    </p>

   
  </details>

  <details className="group">
    <summary
      className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
    >
      <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcQuestions className="w-6 h-6 mx-2 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900">How can I search for my appointments?</span>
                    </p>
                    <AiFillDownCircle className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 text-green-500 group-open:-rotate-180"/>
    </summary>

    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcAnswers className="w-6 h-6 mx-6 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900 ">This can be printed immediately upon the booking being done or later on by going to Appointment.  You can also look at the SMS sent on your mobile immediately upon booking an appointment.

                        </span>
                    </p>

   
  </details>

  <details className="group">
    <summary
      className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
    >
      <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcQuestions className="w-6 h-6 mx-2 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900">How many reschedulement can be done and what are the conditions for the same?</span>
                    </p>
                    <AiFillDownCircle className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 text-green-500 group-open:-rotate-180"/>
    </summary>

    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcAnswers className="w-6 h-6 mx-6 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900 ">An appointment once done can be rescheduled one time at present. We are however trying to see that in future a second reschedule is also allowed upon payment of a reschedulement fee.

                        </span>
                    </p>

   
  </details>

  <details className="group">
    <summary
      className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
    >
      <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcQuestions className="w-6 h-6 mx-2 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900">What is reschedulement fees ?</span>
                    </p>
                    <AiFillDownCircle className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 text-green-500 group-open:-rotate-180"/>
    </summary>

    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                      <FcAnswers className="w-6 h-6 mx-6 text-blue-500"/>
                        <span className="mx-2 font-medium text-gray-900 ">Reschedulement fees is the charges to be paid by the patient in case he goes for the reschedulement of an appointment second time

                        </span>
                    </p>

   
  </details>
</div>

    </div>
  )
}

export default faq