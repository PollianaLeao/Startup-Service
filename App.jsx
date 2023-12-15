
function App() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1>Hello, [Your Name Here]</h1>
        <button onClick={() => setCount(count + 10)}>
          count is {count}
        </button>
      </div>
    );
  }
  