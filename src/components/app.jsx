import { useEffect } from "react"

export default function App () {
  useEffect(() => {
    fetch(`${window.location.origin}/package.json`).then(res => res.json()).then(console.log)
    fetch(`${window.location.origin}/index.html`).then(res => res.text()).then(console.log)
    fetch(`${window.location.origin}/src/root.jsx`).then(res => res.text()).then(console.log)
  }, []);

  return (
    <div style={{ padding: 10, background: 'cyan' }}>
      <h1>MyApp</h1>
    </div>
  )
}
