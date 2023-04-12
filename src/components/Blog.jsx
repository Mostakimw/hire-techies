import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-6">Blogs</h1>
      <div className="mt-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
            When should we use Context API?
          </h3>
          <p className="text-[#757575]">
            In React, the Context API is a way that allows us to share data
            between multiple components without having to pass props down the
            component tree. When we need a data to share one components to other
            components we can use simply Context API. It will help us to avoid
            passing some props though many levels. It can be use for a
            application where we needs to support multiple language. It will
            make the current language available to all of our components.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
            What is custom hook?
          </h3>
          <p className="text-[#757575]">
            Custom hooks is a Javascript function whice we can create by
            ourselves. Hooks area reusable funtions. When we need to share logic
            or data between other Javascript function or Components we use hook.
            Custom hook starts with 'use'. Ex: useState(), useEffect() etc. If
            we want to use custom hook in component we have to first import that
            hook on the top of that component. Like,
            <br />
            <small> import useState from 'react'</small>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
            What is useRef?
          </h3>
          <p className="text-[#757575]">
            'useRef' is a React hook that allows you to create a reference to an
            object that will persist between re-renders of your component. A
            reference is an object having a special property 'current'. We can
            store any value in 'current' and it will persist between re-renders
            of our component. The use case for 'useRef' is when we need to
            access a DOM node. If we want to use it we have to first import
            'useRef' from 'react', then in function we can just simply create
            ref like this: const myRef = useRef(initialValue); initialValue is a
            optional.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
            What is useMemo?
          </h3>
          <p className="text-[#757575]">
            'useMemo' is a React hook that allows you to memoizing the result of
            a funcition call, so that it only recomputes the result when the
            inputs to the function change. If a funtion takes long time to run
            or execute the 'useMemo' come to make it easier. We can use
            'useMemo' to store the result of the function call in memory and
            only recompute the result when the input values to the function
            change. The 'useMemo' hook takes two arguments. One is anonymous
            function that calculates the memoized value and one is dependencies
            that the function depend on. When the dependencies change, 'useMemo'
            will recompute the memoized value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
