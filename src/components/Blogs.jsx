import React from 'react';
import bannerImage1 from '../assets/assets/All Images/Vector-1.png';
import bannerImage from '../assets/assets/All Images/Vector.png';

const Blogs = () => {
    return (
        <div className='text-lg font-semibold text-start'>
            <div className='h-56 bg-purple-200 mb-4'>
                <img className='h-16 ms-auto' src={bannerImage1} alt="" />
                <h1 className='text-center font-bold text-3xl my-6'>Answers of the required questions</h1>
                <img className='h-16' src={bannerImage}alt="" />
            </div>
            <div className='mt-8 mb-4'>1. React's Context API is a popular choice for global state. The React Context API is designed for prop drilling· This means that the props can be accessed from any component. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.
            </div>
            <div className='my-4'>2. Hooks are reusable functions. Custom Hooks are functions. Usually, they start with the word “use” (important convention). Custom React hooks are an essential tool that can add special, unique functionality to the React applications. When component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
            </div>
            <div className='my-4'>3. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. It refers a value that's not needed for rendering.
            </div>
            <div className='my-4'>4. React has a built-in hook called useMemo that allows to memoize expensive functions so that calling them on every render could be avoided. The useMemo is a hook that returns a memoized value. useMemo in React is essential for improving the performance and speed of application by caching the output in the computer memory and returning it when the same input is given again.
            </div>
        </div>
    );
};

export default Blogs;