import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const SearchBook = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://dapi.kakao.com/v3/search/book', {
        params: {
          target: 'title',
          query: debouncedTerm,
        },
        headers: {
          Authorization: 'KakaoAK 853c3a7dbf19399acc6c16722516b25a',
        },
      });

      setResults(data.documents);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <div className="flex items-end justify-end h-56 w-full bg-cover">
        <img src={result.thumbnail} alt={result.title} />
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{result.title}</h3>
        <span className="text-gray-500 mt-2">{result.contents}</span>
      </div>
    </div>
  ));

  return (
    <Section
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
    >
      <div className="relative mt-6 max-w-lg mx-auto">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <img
            className="w-5 h-5 mr-2"
            src={`${process.env.baseUrl}/assets/images/icon-search.svg`}
            alt="search logo"
          />
        </span>

        <input
          className="w-full border rounded-md pl-10 pr-4 py-2 border-gray-400 focus:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="책 이름을 검색해보세요."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {renderedResults}
      </div>
    </Section>
  );
};

export { SearchBook };
