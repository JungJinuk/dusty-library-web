import React from 'react';

import firebase from 'firebase';
import Link from 'next/link';

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // const credential = result.credential as firebase.auth.OAuthCredential;
        // let token = credential.accessToken;
        const { user } = result;
        console.log(user?.displayName);
      })
      .catch((error) => {
        // let errorCode = error.code;
        // let errorMessage = error.message;
        // let email = error.email;
        // let credential = error.credential;
        console.log(error);
      });
  };

  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // let credential = result.credential as firebase.auth.OAuthCredential;
        // let accessToken = credential.accessToken;
        const { user } = result;
        console.log(user?.displayName);
      })
      .catch((error) => {
        // let errorCode = error.code;
        // let errorMessage = error.message;
        // let email = error.email;
        // let credential = error.credential;
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">dusty library</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <h3 className="mb-7 text-xl text-center font-semibold text-gray-700">Social login</h3>
            <div className="flex flex-col space-y-4">
              <button
                type="button"
                onClick={() => signInWithGoogle()}
                className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
              >
                <span>
                  <img
                    className="w-5 h-5"
                    src={`${process.env.baseUrl}/assets/images/googleLogo.svg`}
                    alt="google logo"
                  />
                </span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                  Sign in with Google
                </span>
              </button>
              <button
                type="button"
                onClick={() => signInWithFacebook()}
                className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
              >
                <span>
                  <img
                    className="w-5 h-5"
                    src={`${process.env.baseUrl}/assets/images/facebookLogo.svg`}
                    alt="facebook logo"
                  />
                </span>
                <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                  Sign in with Facebook
                </span>
              </button>
            </div>
          </div>

          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap" />
              <div className="text-center sm:text-right whitespace-nowrap">
                <button
                  type="button"
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-bottom"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="inline-block ml-1">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <Link href="/">
                <button
                  type="button"
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="inline-block ml-1">Back to dusty-library.com</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
