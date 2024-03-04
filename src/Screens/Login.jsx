// // import React, { useState, useEffect } from 'react';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import { MdHome } from "react-icons/md";
// // import { BiX } from "react-icons/bi";
// // import { BiHide } from "react-icons/bi";
// // import { BiShowAlt } from "react-icons/bi";
// // import img1 from '../assets/parking.webp';
// // import img2 from '../assets/parking3.jpg';
// // import img3 from '../assets/parking.webp';
// // import img4 from '../assets/parking5.webp';

// // const SignupSchema = Yup.object().shape({
// //   email: Yup.string().email('Invalid email address').required('Required'),
// //   password: Yup.string().required('Required'),
// // });


// // const Login = () => {
// //   const [loading, setLoading] =useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [showPassword, setShowPassword] = useState(false); 
// //   const images = [img1, img2, img3, img4];
// //   const [errorMessage, setErrorMessage] = React.useState('');

// //   useEffect(() => {
// //     let timer;

// //     if (errorMessage) {
// //       timer = setTimeout(() => {
// //         setErrorMessage('');
// //       }, 6000); // Adjust the duration (in milliseconds) as needed
// //     }

// //     return () => clearTimeout(timer);
// //   }, [errorMessage]);

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
// //     }, 3000);

// //     return () => clearInterval(intervalId);
// //   }, []);

// //   const initialValues = {
// //     email: '',
// //     password: ''
// //   };

// //   function validateEmail(data) {
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return emailRegex.test(data);
// //   }

// //   const handleSubmit = async (values) => {
// //     console.log("je")
// //     try {
// //       if (!validateEmail(values.email)) {
// //         throw new Error('Enter valid email');
// //       } else if (values.password.length < 3) {
// //         throw new Error('Enter valid password');
// //       }

// //       const response = await axios.post('http://localhost:7001/v1/api/endUser/login', values);

// //       if (response.status === 200) {
// //         const responseData = response.data;
// //         if (responseData.data) {
// //           localStorage.setItem('userData', JSON.stringify(responseData.data));
// //           console.log(responseData.data);
// //           window.location.href = "/";
// //         } else {
// //           throw new Error('No data received from server');
// //         }
// //       } else {
// //         throw new Error('Unexpected error occurred');
// //       }
// //     } catch (error) {
// //       let errorMessage = 'An error occurred.';

// //       if (error.response) {
// //         if (error.response.status === 401) {
// //           errorMessage = 'Invalid password.';
// //         } else if (error.response.status === 404) {
// //           errorMessage = 'User not found.';
// //         } else if (error.response.status === 500) {
// //           errorMessage = 'Failed to update user.';
// //         }
// //       }

// //       setErrorMessage(errorMessage);
// //     }
// //   };

// //   return (
   
// //     <div className="flex flex-row justify-center items-center bg-blue-600">
// //       <div className="relative w-[50%] overflow-hidden">
// //         <div
// //           className="flex transition-transform duration-1000 ease-in-out"
// //           style={{
// //             transform: `translateX(-${currentIndex * 100}%)`,
// //             transition: currentIndex === 0 ? 'none' : 'transform 1s ease-in-out'
// //           }}
// //         >
// //           {images.map((image, index) => (
// //             <img key={index} src={image} className="w-full min-h-screen" alt="" />
// //           ))}
// //         </div>
// //       </div>

// //       <div className='flex-row mx-auto md:h-screen lg:py-0 w-[50%]'>
// //         <Link to="/">
// //           <h1 className='float-right py-4 pr-2 text-white text-4xl'><MdHome /></h1>
// //         </Link>
// //         <div className="flex flex-col items-center justify-center px-6 py-12">
// //           <h1 className="flex items-center mb-6 text-[44px] font-semibold text-white">Welcome back here </h1>
// //           <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
// //             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
// //               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-gray-600">
// //                 Sign in to your account
// //               </h1>
// //               <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
// //                 <Form className="space-y-4 md:space-y-6">
// //                   <div>
// //                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
// //                       Your email
// //                     </label>
// //                     <Field
// //                       type="email"
// //                       name="email"
// //                       id="email"
// //                       className="bg-gray-100 font-semibold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
// //                       placeholder="name@gmail.com"
// //                       required
// //                     />
// //                     <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
// //                   </div>
// //                   <div>
// //                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
// //                       Password
// //                     </label>
// //                     <div className="relative">
// //                       <Field
// //                         type={showPassword ? "text" : "password"}
// //                         name="password"
// //                         id="password"
// //                         placeholder="••••••••"
// //                         className="bg-gray-100 font-bold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 pr-12 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
// //                         required
// //                       />
// //                       <button
// //                         type="button"
// //                         className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
// //                         onClick={() => setShowPassword(!showPassword)}
// //                       >
// //                         {showPassword ? (<BiHide />) : (<BiShowAlt />)}
// //                       </button>
// //                     </div>
// //                     <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
// //                   >
// //                     Sign in
// //                   </button>
// //                   <p className="text-sm font-medium text-gray-600">
// //                     Don’t have an account yet?{' '}
// //                     <Link to="/signup" className="font-medium text-blue-700 hover:underline">
// //                       Sign Up
// //                     </Link>
// //                   </p>
// //                 </Form>
// //               </Formik>
// //             </div>
// //           </div>
// //         </div>
// //         {errorMessage && (
// //           <div className="text-center mt-4">
// //             <div className="bg-red-700 text-white px-4 py-3 rounded relative mx-auto flex items-center justify-between w-96">
// //               {errorMessage}
// //               <BiX className="cursor-pointer" onClick={() => setErrorMessage('')} />
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;







// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { MdHome } from "react-icons/md";
// import { BiX } from "react-icons/bi";
// import { BiHide } from "react-icons/bi";
// import { BiShowAlt } from "react-icons/bi";
// import img1 from '../assets/parking.webp';
// import img2 from '../assets/parking3.jpg';
// import img3 from '../assets/parking.webp';
// import img4 from '../assets/parking5.webp';

// const SignupSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Required'),
//   password: Yup.string().required('Required'),
// });

// const Login = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showPassword, setShowPassword] = useState(false); 
//   const images = [img1, img2, img3, img4];
//   const [errorMessage, setErrorMessage] = React.useState('');

//   useEffect(() => {
//     let timer;

//     if (errorMessage) {
//       timer = setTimeout(() => {
//         setErrorMessage('');
//       }, 6000); // Adjust the duration (in milliseconds) as needed
//     }

//     return () => clearTimeout(timer);
//   }, [errorMessage]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const initialValues = {
//     email: '',
//     password: ''
//   };

//   function validateEmail(data) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(data);
//   }

//   const handleSubmit = async (values) => {
//     try {
//       if (!validateEmail(values.email)) {
//         throw new Error('Enter valid email');
//       } else if (values.password.length < 3) {
//         throw new Error('Enter valid password');
//       }

//       const response = await axios.post('http://localhost:7001/v1/api/endUser/login', values);

//       if (response.status === 200) {
//         const responseData = response.data;
//         if (responseData.data) {
//           localStorage.setItem('userData', JSON.stringify(responseData.data));
//           console.log(responseData.data);
//           window.location.href = "/";
//         } else {
//           throw new Error('No data received from server');
//         }
//       } else {
//         throw new Error('Unexpected error occurred');
//       }
//     } catch (error) {
//       let errorMessage = 'An error occurred.';

//       if (error.response) {
//         if (error.response.status === 401) {
//           errorMessage = 'Invalid password.';
//         } else if (error.response.status === 404) {
//           errorMessage = 'User not found.';
//         } else if (error.response.status === 500) {
//           errorMessage = 'Failed to update user.';
//         }
//       }

//       setErrorMessage(errorMessage);
//     }
//   };

//   return (
//     <div className="flex flex-row justify-center items-center bg-blue-600">
//       <div className="relative w-[50%] overflow-hidden">
//         <div
//           className="flex transition-transform duration-1000 ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             transition: currentIndex === 0 ? 'none' : 'transform 1s ease-in-out'
//           }}
//         >
//           {images.map((image, index) => (
//             <img key={index} src={image} className="w-full min-h-screen" alt="" />
//           ))}
//         </div>
//       </div>
//       <div className='flex-row mx-auto md:h-screen lg:py-0 w-[50%]'>
//         <Link to="/">
//           <h1 className='float-right py-4 pr-2 text-white text-4xl'><MdHome /></h1>
//         </Link>
//         <div className="flex flex-col items-center justify-center px-6 py-12">
//           <h1 className="flex items-center mb-6 text-[44px] font-semibold text-white">Welcome back here </h1>
//           <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-gray-600">
//                 Sign in to your account
//               </h1>
//               <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
//                 <Form className="space-y-4 md:space-y-6">
//                   <div>
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
//                       Your email
//                     </label>
//                     <Field
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="bg-gray-100 font-semibold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       placeholder="name@gmail.com"
//                       required
//                     />
//                     <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
//                   </div>
//                   <div>
//                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <Field
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         id="password"
//                         placeholder="••••••••"
//                         className="bg-gray-100 font-bold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 pr-12 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         required
//                       />
//                       <button
//                         type="button"
//                         className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? (<BiHide />) : (<BiShowAlt />)}
//                       </button>
//                     </div>
//                     <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                   >
//                     Sign in
//                   </button>
//                   <p className="text-sm font-medium text-gray-600">
//                     Don’t have an account yet?{' '}
//                     <Link to="/signup" className="font-medium text-blue-700 hover:underline">
//                       Sign Up
//                     </Link>
//                   </p>
//                 </Form>
//               </Formik>
//             </div>
//           </div>
//         </div>
//         {errorMessage && (
//           <div className="text-center mt-4">
//             <div className="bg-red-700 text-white px-4 py-3 rounded relative mx-auto flex items-center justify-between w-96">
//               {errorMessage}
//               <BiX className="cursor-pointer" onClick={() => setErrorMessage('')} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { BiX } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import img1 from '../assets/parking.webp';
import img2 from '../assets/parking3.jpg';
import img3 from '../assets/parking.webp';
import img4 from '../assets/parking5.webp';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false); 
  const images = [img1, img2, img3, img4];
  const [errorMessage, setErrorMessage] = React.useState('');

  useEffect(() => {
    let timer;

    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage('');
      }, 6000); // Adjust the duration (in milliseconds) as needed
    }

    return () => clearTimeout(timer);
  }, [errorMessage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const initialValues = {
    email: '',
    password: ''
  };

  function validateEmail(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  const handleSubmit = async (values) => {
      console.log("f");
    try {
      if (!validateEmail(values.email)) {
        throw new Error('Enter valid email');
      } else if (values.password.length < 3) {
        throw new Error('Enter valid password');
      }
      console.log("g");

      const response = await axios.post('http://localhost:7001/v1/api/user/login', values);
 console.log(response)
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.data) {
          console.log("h");

          localStorage.setItem('userData', JSON.stringify(responseData.data));
          console.log(responseData.data);
          window.location.href = "/";
        } else {
          throw new Error('No data received from server');
        }
      } else {
        throw new Error('Unexpected error occurred');
      }
    } catch (error) {
      let errorMessage = 'An error occurred.';

      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Invalid password.';
        } else if (error.response.status === 404) {
          errorMessage = 'User not found.';
        } else if (error.response.status === 500) {
          errorMessage = 'Failed to update user.';
        }
      }

      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center bg-blue-600">
      <div className="relative w-[50%] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: currentIndex === 0 ? 'none' : 'transform 1s ease-in-out'
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} className="w-full min-h-screen" alt="" />
          ))}
        </div>
      </div>

      <div className='flex-row mx-auto md:h-screen lg:py-0 w-[50%]'>
        <Link to="/">
          <h1 className='float-right py-4 pr-2 text-white text-4xl'><MdHome /></h1>
        </Link>
        <div className="flex flex-col items-center justify-center px-6 py-12">
          <h1 className="flex items-center mb-6 text-[44px] font-semibold text-white">Welcome back here </h1>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-gray-600">
                Sign in to your account
              </h1>
              <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                      Your email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-100 font-semibold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@gmail.com"
                      required
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-100 font-bold border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 pr-12 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (<BiHide />) : (<BiShowAlt />)}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-medium text-gray-600">
                    Don’t have an account yet?{' '}
                    <Link to="/signup" className="font-medium text-blue-700 hover:underline">
                      Sign Up
                    </Link>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        {errorMessage && (
          <div className="text-center mt-4">
            <div className="bg-red-700 text-white px-4 py-3 rounded relative mx-auto flex items-center justify-between w-96">
              {errorMessage}
              <BiX className="cursor-pointer" onClick={() => setErrorMessage('')} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
