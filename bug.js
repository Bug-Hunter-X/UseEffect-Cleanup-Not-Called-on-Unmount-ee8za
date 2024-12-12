```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); // This will log the count after each update
    return () => {
      // Cleanup function (optional): this will run before the next effect runs
      console.log('Cleanup function running'); 
    };
  }, [count]); //The dependency array [count] makes this effect run only when the count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MyComponent;
```