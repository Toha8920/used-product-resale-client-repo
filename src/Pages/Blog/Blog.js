import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border mx-4 rounded-md p-2'>
                <h2 className="text-2xl text-red-500">What are the different ways to manage a state in a React application?</h2>
                <p className='text-xl'>The Four Kinds of React State to Manage</p>
                <ul>
                    <li>1. Local state.</li>
                    <li>2. Global state.</li>
                    <li>3. Server state.</li>
                    <li>4. URL state.</li>
                </ul>
            </div>
            <div className='border mx-4 rounded-md p-2 mt-4'>
                <h2 className="text-2xl text-red-500">How does prototypical inheritance work?</h2>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            </div>
            <div className='border mx-4 rounded-md p-2 mt-4'>
                <h2 className="text-2xl text-red-500">What is a unit test? Why should we write unit tests?</h2>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='border mx-4 rounded-md p-2 mt-4'>
                <h2 className="text-2xl text-red-500">React vs. Angular vs. Vue?</h2>
                <p className='text-xl'>Angular vs React</p>
                <p>
                    If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                    React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.</p>
                <p className='text-xl'>React vs Vue</p>
                <p>
                    The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.</p>
                <p className='text-xl'>Angular vs Vue</p>
                <p>In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                    A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.</p>
            </div>
        </div>
    );
};

export default Blog;