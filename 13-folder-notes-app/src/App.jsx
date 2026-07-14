import React, { useState } from 'react'
import { X } from 'lucide-react';
 

const App = () => {

  const [title, setTitle] = useState(""); // for passing the title of notes.
  const [details, setDetails] = useState(""); // for passing the details of the notes.
  
  const [task, setTask] = useState([]) // storing the each task.

  const submitHandle = (e) => {
  e.preventDefault();
  // console.log(title,'and', details);

  const copyTask = [...task]

  copyTask.push({title, details})
  
  setTask(copyTask)
  // console.log(copyTask)
  // console.log(task);
  

  setTitle('');
  setDetails('');
  }

  const deleteNote = (idx) => {
    // console.log('Deleted')
    const copyTask = [...task];
    // console.log(copyTask[idx]);
    copyTask.splice(idx, 1);
    setTask (copyTask);
  }

  


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandle(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start  p-10'>
        <h1 className='text-xl font-bold'>Add Notes</h1>


        {/* PEHALA HEADING  */}
        <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 w-full py-2 border-2 rounded outline-none font-medium'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        />

        {/* DETALIS HEADING */}
        <textarea
        type="text" 
        className='px-5 w-full py-2 h-40 border-2 rounded outline-none font-medium' 
        placeholder='Write Details' 
        value={details}
        onChange={(e)=> {
          setDetails(e.target.value)
        }}
        />

        <button className='bg-white active:scale-95 w-full text-black px-5 py-5 rounded outline-none font-medium'>Add note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l p-10'>
        <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem, idx) {
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 text-black py-6 pb-5 px-4 pl-8 rounded-xl bg-cover bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>
            <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-sm font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={() => {
              deleteNote(idx)
            }} className='w-full py-1 rounded bg-red-500 text-xs text-white font-bold active:scale-95'>Delete note</button>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App