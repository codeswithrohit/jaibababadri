import { useState } from 'react';
import {firebase} from '../Firebase/config';

const AddQuestionsForm = () => {
  const [branchname, setBranchName] = useState('');
  const [chaptername, setChapterName] = useState('');
  const [semestername, setSemesterName] = useState('');
  const [subjectname, setSubjectName] = useState('');
  const [yearname, setYearName] = useState('');
  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
  const [images, setImages] = useState([]);
  const handleQuestionChange = (event, index) => {
    const { name, value } = event.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Add questions to Firestore
    const db = firebase.firestore();
    const newQuestionsRef = db.collection('Engineering').doc();
    await newQuestionsRef.set({
     
      questions,
      branchname,
      yearname,
      semestername,
      subjectname,
      chaptername
    });
  
    // Upload images to Firebase Storage
    const storage = firebase.storage();
    const imagesRef = storage.ref().child(newQuestionsRef.id);
    const imageUrls = [];
    for (const image of images) {
      const snapshot = await imagesRef.child(image.name).put(image);
      const imageUrl = await snapshot.ref.getDownloadURL();
      imageUrls.push(imageUrl);
    }
  
    await newQuestionsRef.update({
      images: imageUrls
    });
  
    alert('Questions added successfully');
    setBranchName('');
    setChapterName('');
    setSemesterName('');
    setSubjectName('');
    setYearName('');
    setQuestions([{ question: '', answer: '' }]);
    setImages([]);
  };
  

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        
        <label>
          Branch:
          <select value={branchname} onChange={(event) => setBranchName(event.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select Branch</option>
            <option value="CSE">Computer Science</option>
            <option value="EE">Electrical Engineering</option>
            <option value="ECE">Electronics Commmunication Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
          </select>
        </label>
        <label>
          Year:
          <select value={yearname} onChange={(event) => setYearName(event.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </label>
        <label>
          Semester:
          <select value={semestername} onChange={(event) => setSemesterName(event.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select Semester</option>
            <option value="1st Semester">1st Semester</option>
            <option value="2nd Semester">2nd Semester</option>
            <option value="3rd Semester">3rd Semester</option>
            <option value="4th Semester">4th Semester</option>
            <option value="5th Semester">5th Semester</option>
            <option value="6th Semester">6th Semester</option>
            <option value="7th Semester">7th Semester</option>
            <option value="8th Semester">8th Semester</option>
          </select>
        </label>
        <label>
          Subject Name:
          <input
            type="text"
            name="subject"
            value={subjectname}
            onChange={(event) => setSubjectName(event.target.value)}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label>
          Unit Name:
          <input
            type="text"
            name="subject"
            value={chaptername}
            onChange={(event) => setChapterName(event.target.value)}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label>
  Images:
  <input type="file" name="images" multiple onChange={(event) => setImages(event.target.files)} />
</label>
        
        {questions.map((q, index) => (
          <div key={index} className="my-4">
            <label>
              Question:
              <input
                type="text"
                name="question"
                value={q.question}
                onChange={(event) => handleQuestionChange(event, index)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label>
              Answer:
              <input
                type="text"
                name="answer"
                value={q.answer}
                onChange={(event) => handleQuestionChange(event, index)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            {index !== 0 && (
              <button type="button" onClick={() => handleRemoveQuestion(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
                Remove Question
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Add Question
        </button>
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
          Submit
        </button>
      </form>
      </div>
    
    );
};

export default AddQuestionsForm;