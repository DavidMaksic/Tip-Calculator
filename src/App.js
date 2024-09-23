import { useState } from 'react';

export default function App() {
   const [bill, setBill] = useState('');
   const [question1, setQuestion1] = useState(10);
   const [question2, setQuestion2] = useState(10);

   const tip = bill * ((question1 + question2) / 2 / 100);

   function reset() {
      setBill('');
      setQuestion1(10);
      setQuestion2(10);
   }

   return (
      <div className="bg-zinc-700 h-screen text-zinc-300 flex flex-col justify-center items-center gap-10 text-3xl selection:bg-zinc-500 selection:text-white">
         <Bill bill={bill} setBill={setBill} />

         <Service question={question1} setQuestion={setQuestion1}>
            How did you like the service?
         </Service>

         <Service question={question2} setQuestion={setQuestion2}>
            What did your friend think of our service?
         </Service>

         <Output bill={bill} tip={tip} reset={reset} />
      </div>
   );
}

function Bill({ bill, setBill }) {
   return (
      <div className="flex flex-col gap-4 items-center">
         <span>How much was the bill?</span>
         <input
            className="w-40 rounded-full pl-5 pb-3 py-2 text-zinc-300 bg-zinc-500 outline-shadow"
            type="text"
            value={bill}
            onChange={(e) => setBill(+e.target.value)}
            placeholder="Bill value"
         />
      </div>
   );
}

function Service({ question, setQuestion, children }) {
   return (
      <div className="flex flex-col gap-4 items-center">
         <span>{children}</span>
         <select
            className="rounded-full pl-4 pb-3 py-2 text-zinc-300 bg-zinc-500 cursor-pointer outline-shadow"
            type="text"
            value={question}
            onChange={(e) => setQuestion(+e.target.value)}
         >
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>Okay (5%)</option>
            <option value={10}>Good (10%)</option>
            <option value={20}>Amazing! (20%)</option>
         </select>
      </div>
   );
}

function Output({ bill, tip, reset }) {
   return (
      <div
         className={`flex flex-col gap-10 items-center mt-10 w-2/5 transition-all duration-500 ${
            !bill ? 'hide' : ''
         }`}
      >
         <div className="h-[1px] w-full bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700"></div>

         <span className="text-4xl font-medium italic text-center text-zinc-400">
            You pay <em className="text-zinc-300">${bill + tip}</em> (${bill} +
            ${tip.toFixed(2)} tip)
         </span>

         <button
            className="bg-zinc-600 text-zinc-400 p-3 pb-5 px-6 rounded-full hover:bg-zinc-500 hover:text-zinc-300 transition outline-shadow"
            onClick={reset}
         >
            Reset
         </button>
      </div>
   );
}
