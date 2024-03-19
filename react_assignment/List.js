import React from 'react';

function MyListComponent() {
  const items = [
    { id: 1, name: 'Emmanuel' },
    { id: 2, name: 'Anumira' },
    { id: 3, name: 'Anurika' },
    // Add more items as needed
  ];

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyListComponent;
