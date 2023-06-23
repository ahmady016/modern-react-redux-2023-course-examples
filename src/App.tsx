import React from "react"

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <main>
      <h2>Vite + React</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
