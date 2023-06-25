import React from 'react';
import line from '../../assets/line.svg'
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs');
    return (
        <div style={{ maxWidth: '1200px' }} className='mx-auto px-4 py-28'>
            <div className='text-center pb-20'>
                <h1 className='font-sans font-bold text-neutral-900 text-4xl uppercase mb-8'>Blogs</h1>
                <img className='mx-auto text-yellow-500' src={line} alt="" />
            </div>
            <div className='mb-20'>
                <h1 className='my-3 text-xl font-semibold'>Difference between SQL and NoSQL?</h1>
                <div>
                    <p>SQL (Structured Query Language) databases follow a structured, table-based data model with fixed schemas and enforce strict ACID compliance. They are ideal for structured data, complex queries, and transactional consistency in applications like ERP systems and financial applications.</p>
                    <br />
                    <p>
                        NoSQL (Not Only SQL) databases, on the other hand, embrace a variety of data models such as key-value, columnar, document-based, and graph structures. They offer flexible schemas, horizontal scalability, and prioritize availability and partition tolerance. NoSQL databases excel in handling unstructured and rapidly changing data, making them suitable for real-time analytics, content management systems, social media platforms, and IoT applications.
                    </p>
                </div>
            </div>
            <div className='mb-20'>
                <h1 className='my-3 text-xl font-semibold'>What is JWT, and how does it work?</h1>
                <div>
                    <p>JWT stands for JSON Web Token. It is an open standard (RFC 7519) that defines a compact and self-contained way to securely transmit information between parties as a JSON object. JWTs are commonly used for authentication and authorization in web applications and APIs.</p>
                    <br />
                    <p>
                        A JWT consists of three parts: header, payload, and signature. The header contains information about the token, such as the algorithm used for signing. The payload contains the claims or statements about the user and additional data. The signature is created by combining the encoded header, payload, and a secret key. Upon receiving a JWT, the recipient can validate the signature to ensure the integrity and authenticity of the token.
                    </p>
                </div>
            </div>
            <div className='mb-20'>
                <h1 className='my-3 text-xl font-semibold'>What is the difference between javaScript and NodeJS?</h1>
                <div>
                    <p>
                        JavaScript is a programming language primarily used for client-side web development. It is executed within web browsers and allows interactivity and dynamic content on web pages. JavaScript can manipulate the Document Object Model (DOM), handle events, and communicate with servers through AJAX.

                    </p>
                    <br />
                    <p>
                        Node.js, on the other hand, is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables JavaScript to run on the server-side, outside of web browsers. Node.js provides a runtime environment for executing JavaScript code on servers, allowing developers to build scalable and efficient network applications. It comes with a rich set of built-in modules and has a non-blocking, event-driven architecture, making it suitable for building real-time applications, APIs, and server-side scripting.
                    </p>
                </div>
            </div>
            <div className='mb-20'>
                <h1 className='my-3 text-xl font-semibold'>How does NodeJS handle multiple requests at the same time?</h1>
                <div>
                    <p>
                        Node.js handles multiple requests simultaneously through its event-driven, non-blocking I/O model. It uses an event loop that allows it to efficiently handle concurrent operations without blocking the execution of other requests. When a request is received, Node.js registers a callback function and continues to process other requests.
                    </p>
                    <br />
                    <p>
                        Asynchronous I/O operations, such as file system access or network requests, are delegated to separate threads or the operating system, while the event loop remains available to handle new events. Once an asynchronous operation completes, the corresponding callback is triggered, enabling Node.js to continue processing the request and respond without waiting for the I/O operation to finish, maximizing throughput and responsiveness.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;