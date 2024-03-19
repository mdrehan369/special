import React from 'react'
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import pic4 from "./assets/pic4.jpeg";
import pic5 from "./assets/pic5.jpeg";
import pic6 from "./assets/pic6.jpeg";
import pic7 from "./assets/pic7.jpeg";
import pic8 from "./assets/pic8.jpeg";

function App() {
  return (
    <div className='w-[70vw] bg-gray-200 mx-auto my-20 prose prose-2xl border-4 p-8 rounded-xl relative'>

      <div>
        <h2>Ayeeee Miss CUTE .... </h2>Kaisi ho <b>JAAN</b> ....
        Do you remember today's date ... It's <b>"20th March"</b> .... Do you know what's so special about this day .... This day last year <b>I MADE A COMMITMENT FOR WHICH I WILL ALWAYS BE THANKFUL TO LIFE .... </b>
      </div>

      {/* <br /> */}
      <img src={pic2} className='w-[15vw] m-0 rotate-[-105deg] h-auto object-cover rounded-xl p-3' />
      <img src={pic6} className='w-[15vw] m-0 rotate-[15deg] h-auto object-cover rounded-xl p-3 absolute right-20 top-[12%]' />
      {/* <br /> */}
      <div>
        Ahhh that day .... Just think agr humlog uss din bunk ni kiye hote to shyd humko shyd kabhi pta hi ni chalta ki <b>LIFE</b> kitniiii achiii hoti h bs ek sahi insaan ka hona zaroori h....
      </div>

      <br />
      <img src={pic5} className='w-[15vw] m-0 rotate-[-15deg] h-auto object-cover rounded-xl p-3' />
      <img src={pic8} className='w-[15vw] m-0 rotate-[-100deg] h-auto object-cover rounded-xl p-3  right-20 absolute top-[25%]' />
      <br />

      Agr uss din hum log bunk ni kiye hote to shyd hum aj bhi waise hi hote... <b>Emotionless</b> and creep ...

      <br />
      <img src={pic1} className='w-[15vw] m-2 rotate-[15deg] h-auto object-cover rounded-xl p-3' />
      <img src={pic3} className='w-[15vw] m-0 rotate-[-10deg] h-auto object-cover rounded-xl p-3  right-20 absolute top-[43%]' />
      <br />

      Agr uss din humlog bunk ni kiye hote to shyd tm itnaaa pareshan ni hoti iss saal me jitna mere wajeh se hui ho .... <b>I am really SORRY !!!</b>

      <br />
      <img src={pic7} className='w-[15vw] m-0 rotate-[-15deg] h-auto object-cover rounded-xl p-3' />
      <br />

      And yes how can I forget that... That <b>KISS</b> ufff I never felt so amazed .... Aj that feeling  when I was talking with a friend and you suddenly kissed me and I was in the ninth cloud...

      <br />
      <br />

      Yrr pata hi ni chala ki kab ek saal hogya and sach me waqt ka pta ni chalta agar koi bht <b>khaas/special insaan</b> k sath ho ap... I am very thankful to u.... U made me realise what the love is in true sense .... U always pushes me to my limits and supports me in my side.... U always criticize my bad habits and scold me for it ... I am nothing without you ... And I do agree that we had some bad moments together but trust me <b>ALOO</b> those moments were necessary to get a better understanding of each other .... I know currently we are not dating bt I just want to see you happy and make this moment more memorable..

      <div className='flex'>
        <h2>Dhyann Se Dekhiye Iss Haseeen Ladki Ko.... Isi Ne To Mujhe DEEWANA Bana Kar Rakha Hai</h2>

        <img src={pic4} className='w-[15vw] m-0 rotate-[-0deg] h-auto object-cover rounded-xl p-3' />
      </div>
    </div>
  )
}

export default App