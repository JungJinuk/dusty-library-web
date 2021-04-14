import React from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Price = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="max-w-4xl mx-auto md:flex">
      <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
        <div className="w-full flex-grow">
          <h2 className="text-center font-bold mb-4">Basic</h2>
          <h3 className="text-center font-bold text-4xl mb-5 text-gray-900">₩5,500/월</h3>
          <ul className="text-sm px-5 mb-8 space-y-2">
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              책 1권 대여
            </li>
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              Dolor sit amet
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center justify-items-stretch">
          <Link href="/">
            <a>
              <Button>책 대여하기</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
        <div className="w-full flex-grow">
          <h2 className="text-center font-bold mb-4">Standard</h2>
          <h3 className="text-center font-bold text-4xl md:text-4xl mb-5 text-gray-900">
            ₩7,000/월
          </h3>
          <ul className="text-sm px-5 mb-8 space-y-2">
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              책 2권 대여
            </li>
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              Dolor sit amet
            </li>
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              Consectetur
            </li>
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              Adipisicing
            </li>
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              Elit repellat
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/">
            <a>
              <Button>책 대여하기</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
        <div className="w-full flex-grow">
          <h2 className="text-center font-bold mb-4">Pro</h2>
          <h3 className="text-center font-bold text-4xl mb-5 text-gray-900">₩13,000/월</h3>
          <ul className="text-sm px-5 mb-8 space-y-2">
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              책 3권 이상 대여
            </li>
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              Dolor sit amet
            </li>
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              Consectetur
            </li>
            <li className="leading-tight text-lg flex">
              <img
                className="w-5 h-5 mr-2"
                src={`${process.env.baseUrl}/assets/images/check-gray.svg`}
                alt="check logo"
              />
              Adipisicing
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/">
            <a>
              <Button>책 대여하기</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

export { Price };
