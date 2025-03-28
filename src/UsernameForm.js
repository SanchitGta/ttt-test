import React, { useState } from 'react';

const UsernameForm = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setError('Username is required');
    } else {
      setError('');
      alert(`Submitted Username: ${username}`);
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default UsernameForm;
