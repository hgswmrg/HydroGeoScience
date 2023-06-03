import React from 'react';
import ResearchTopicCard from './ResearchTopicCard';

const ResearchTopicsContainer = () => {
  const data = [
    { text: 'Where does the water go after it rains?', imageSrc: '/assets/research1.jpg' },
    { text: 'How does chemistry of rainwater alter?', imageSrc: '/assets/research2.png' },
    { text: 'How do land developments impact water pathways? ', imageSrc: '/assets/research3.jpeg' },
    { text: 'Where are suitable locations for land developments?', imageSrc: '/assets/research4.jpeg' },
  ];

  return (
    <div className='flex flex-col md:flex-row flex-wrap mt-10 ml-8 items-center'>
      {data.map((item, index) => (
        <ResearchTopicCard key={index} text={item.text} imageSrc={item.imageSrc}/>
      ))}
    </div>
  );
};

export default ResearchTopicsContainer;
