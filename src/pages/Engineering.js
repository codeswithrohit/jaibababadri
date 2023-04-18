/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { firebase } from "../Firebase/config";
import Head from 'next/head'
import "swiper/css";
import "swiper/css/pagination";


const db = firebase.firestore();
const storage = firebase.storage();

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [units, setUnits] = useState([]);
  
 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedYear("");
    setSelectedSemester("");
    setSelectedSubject("");
    setSelectedUnit("");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedSemester("");
    setSelectedSubject("");
    setSelectedUnit("");
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    setSelectedSubject("");
    setSelectedUnit("");
  };



  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedUnit("");
  };
  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  const selectedText = `${selectedOption} ${selectedYear} ${selectedSemester} ${selectedSubject} ${selectedUnit}`;
  const [data, setData] = useState([]);
const [images, setImages] = useState([]);
const [questions, setQuestions] = useState([]);

useEffect(() => {
  // Fetch data from Firebase Firestore
  db.collection("Engineering")
  .where("branchname", "==", selectedOption)
  .where("yearname", "==", selectedYear)
  .where("semestername", "==", selectedSemester)
  .where("subjectname", "==", selectedSubject)
  .where("chaptername", "==", selectedUnit)
    .get()
    .then((querySnapshot) => {
      const documents = querySnapshot.docs.map((doc) => doc.data());
      setData(documents);
      // Get the array of image URLs from the documents
      const imageUrls = documents.map((doc) => doc.images).flat();
      setImages(imageUrls);
      const queans = documents.map((doc) => doc.questions).flat();
      setQuestions(queans);
    })
   
    
    .catch((error) => console.log(error));
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [selectedOption, selectedYear, selectedSemester, selectedSubject,selectedUnit]);

 

  useEffect(() => {
    if (selectedSemester !== "") {
      // Fetch subjects based on selected category
      db.collection("Engineering")
      .where("branchname", "==", selectedOption)
      .where("yearname", "==", selectedYear)
      .where("semestername", "==", selectedSemester)
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data());
          const uniqueSubjects = [...new Set(documents.map((doc) => doc.subjectname))];
          setSubjects(uniqueSubjects);
        })
        .catch((error) => console.log(error));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSemester]);

  useEffect(() => {
    if (selectedSubject !== "") {
      // Fetch subjects based on selected category
      db.collection("Engineering")
      .where("branchname", "==", selectedOption)
      .where("yearname", "==", selectedYear)
      .where("semestername", "==", selectedSemester)
      .where("subjectname", "==", selectedSubject)
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data());
          const uniqueUnits = [...new Set(documents.map((doc) => doc.chaptername))];
          setUnits(uniqueUnits);
        })
        .catch((error) => console.log(error));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubject]);


  const [selectedPdf, setSelectedPdf] = useState("");
  const [isBookVisible, setIsBookVisible] = useState(false);

  const downloadPdf = (url) => {
    setSelectedPdf(url);
    setIsBookVisible(true);
  };

  const hidePdf = () => {
    setSelectedPdf("");
    setIsBookVisible(false);
  };


  const [selectedPadhogPdf, setSelectedPadhogPdf] = useState("");
  const [isPadhogBookVisible, setIsPadhogBookVisible] = useState(false);

  const downloadPadhoGPdf = (url) => {
    setSelectedPadhogPdf(url);
    setIsPadhogBookVisible(true);
  };

  const hidePadhogPdf = () => {
    setSelectedPadhogPdf("");
    setIsPadhogBookVisible(false);
  };

  const [loaded, setLoaded] = useState(images.map(() => false));

  function handleImageLoaded(index) {
    setLoaded((prevState) => {
      prevState[index] = true;
      return [...prevState];
    });
  }




  function ImageWithLoadingIndicator({ imageUrl }) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
  
    function handleImageClick() {
      setIsOpen(true);
    }
  
    function handleClose() {
      setIsOpen(false);
    }
    const handleLoad = () => {
      setIsLoading(false);
    };
  
    const handleProgress = (event) => {
      if (event.lengthComputable) {
        setLoadingProgress((event.loaded / event.total) * 100);
      }
    };
  
    return (
      <div>
        {isLoading && <div>{loadingProgress}%</div>}
        <img
          src={imageUrl}
          onLoad={handleLoad}
          onClick={handleImageClick}
          onProgress={handleProgress}
          className="cursor-pointer"
          style={{ display: isLoading ? "none" : "block" }}
        />
         {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0" onClick={handleClose}></div>
            <img src={imageUrl} alt="Full Screen Image" className="max-h-full max-w-full" />
          </div>
        )}
      </div>
    );
  }

  return (
    <>
     <div className='min-h-screen'>
    <Head>
        <title>Engineering Notes</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="flex flex-col w-full max-w-xs mx-auto mt-10">
                    <p className="mt-1 mb-4 text-center font-serif text-sm text-blue-300 dark:text-gray-300">Are You looking for {selectedText}</p>
          <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
              <option value="">Select Your Branch</option>
              <option value="CSE">Computer Science Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="ECE">Electronics Communication Engineering</option>
          </select>

          {selectedOption  !== "" && (
              <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                  <option value="">Select  Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>

              </select>
          )}

          

          {selectedYear !== "" && (
              <select
                  value={selectedSemester}
                  onChange={handleSemesterChange}
                  className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                  <option value="">Select Semester</option>
                  {selectedYear === "1st Year" && (
                      <>
                          <option value="1st Semester">1st Semester</option>
                          <option value="2nd Semester">2nd Semester</option>
                      </>
                  )}
                  {selectedYear === "2nd Year" && (
                      <>
                          <option value="3rd Semester">3rd Semester</option>
                          <option value="4th Semester">4th Semester</option>
                      </>
                  )}
                  {selectedYear === "3rd Year" && (
                      <>
                          <option value="5th Semester">5th Semester</option>
                          <option value="6th Semester">6th Semester</option>
                      </>
                  )}
                  {selectedYear === "4th Year" && (
                      <>
                          <option value="7th Semester">7th Semester</option>
                          <option value="8th Semester">8th Semester</option>
                      </>
                  )}
              </select>
          )}

         

{selectedSemester !== "" && (
  subjects.length === 0 ? (
    <p className="mt-4 text-center text-sm font-serif">Thank you for your interest in {selectedText}  Our team is currently working on updating the data, and it will be available soon. Please check back later........</p>
  ) : (
    <select
      value={selectedSubject}
      onChange={handleSubjectChange}
      className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
    >
      <option value="">Select Subject</option>
      {subjects.map((subject) => (
        <option key={subject} value={subject}>{subject}</option>
      ))}
    </select>
  )
)}
{selectedSubject !== "" && (
  <select
    value={selectedUnit}
    onChange={handleUnitChange}
    className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
  >
    <option value="">Select Unit</option>
    {units.map((unit) => (
      <option key={unit} value={unit}>{unit}</option>
    ))}
  </select>
)}



      </div><section className="container px-4 mx-auto">
         

  

              {data.map((doc, index) => (
  <><div key={index} className="my-4 p-46 border border-gray-300 rounded-md shadow-sm">
                  <div className="mt-8 items-center ">
                    <div className="grid grid-cols-1   gap-4  ">




                      <button
                        onClick={() => {
                          if (isPadhogBookVisible) {
                            hidePadhogPdf();
                          } else {
                            downloadPadhoGPdf(doc.PadhogPdfUrl);
                          }
                        } }
                        className="inline-block   border-2 border-green-500  rounded-full bg-info  pt-2.5 pb-2 text-xs font-bold uppercase leading-normal text-blue-300 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                      >
                        {isPadhogBookVisible ? "Hide" : "View PadhoG Special Short Notes"}
                      </button>
                      {isPadhogBookVisible && selectedPadhogPdf === doc.PadhogPdfUrl && (
  <><div className="max-w-xs drop-shadow-primary self-start">
                          {images.map((imageUrl, index) => (
                            <div key={index} className="mt-2 w-full h-full mb-10">
                              <ImageWithLoadingIndicator imageUrl={imageUrl} />
                            </div>
                          ))}
                        </div>
                        
                          
                          </>
)}
{questions.map((ansque, index) => (
                        <div className="space-y-4 mt-6">
                            <details
                              className="group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                              open
                            >
                              <summary className="flex items-center justify-between cursor-pointer">
                                <h2 className="text-lg font-medium text-gray-900">
                                  Que.{index + 1}. {ansque.question}
                                </h2>

                                <span
                                  class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                      clip-rule="evenodd" />
                                  </svg>
                                </span>
                              </summary>

                              <p className="mt-4 leading-relaxed text-gray-700">
                              Ans. {ansque.answer}
                              </p>
                            </details>

                           
                          </div>))}
                    </div>

                  </div>

                </div>
               </>
))}
<style jsx>{`
        .pdf-container {
          width: 100%;
          height: 300px;
        }

        @media only screen and (min-width: 768px) {
          .pdf-container {
            width: 100%;
            height: 500px;
          }

          .pdf-container + button {
            margin-left: 2rem;
          }
        }
      `}</style>

          </section>
          </div></>
  );
};

export default SelectOption;