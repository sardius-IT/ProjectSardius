import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/contact')
      .then((response) => response.json())
      .then((data) => {
        setSubmissions(data);
      })
      .catch((error) => console.error('Error fetching messages:', error));
  }, []);

  // Function to extract and format message with clickable link
  const formatMessage = (message) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = message.split(urlPattern);

    return parts.map((part, index) => {
      if (part.match(urlPattern)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {part}
          </a>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Phone</th>
            <th className="border border-gray-400 p-2">Subject</th>
            <th className="border border-gray-400 p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id} className="text-center">
              <td className="border border-gray-400 p-2">{submission.name}</td>
              <td className="border border-gray-400 p-2">{submission.email}</td>
              <td className="border border-gray-400 p-2">{submission.phone}</td>
              <td className="border border-gray-400 p-2">{submission.subject}</td>
              <td className="border border-gray-400 p-2">
                {formatMessage(submission.message)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;




