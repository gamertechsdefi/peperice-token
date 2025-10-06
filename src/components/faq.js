import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is $PEPERICE?",
      answer: "Ratatouille $PEPE is a community-driven BSC token launched with a market cap of $900, designed for significant growth potential."
    },
    {
      question: "Is $PEPERICE safe?",
      answer: "Yes, $PEPERICE features a verified and renounced contract with burned liquidity. The max wallet is limited to 1% to prevent whale manipulation."
    },
    {
      question: "What are the taxes?",
      answer: "The total tax is 3-3, with 1% going to burn and 2% allocated to marketing to ensure sustainable growth."
    },
    {
      question: "Where can I buy $PPERICE?",
      answer: "You can buy $PEPERICE on PancakeSwap. Make sure to set slippage according to the tax structure. Always verify the contract address before purchasing."
    },
    {
      question: "What's the marketing strategy?",
      answer: "We have planned strategic marketing campaigns that will roll out at key market cap milestones to ensure sustainable growth and maximum exposure."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-center mb-12 text-green-800">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-neutral-800 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left text-white hover:bg-neutral-700"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-xl">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-green-300" />
              ) : (
                <ChevronDown className="w-5 h-5 text-green-300" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-300 text-xl bg-neutral-800 border-t border-neutral-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;