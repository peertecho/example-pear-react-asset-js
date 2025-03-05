import { useEffect } from "react"

const clientId = JSON.parse(Pear.argv[Pear.argv.length - 1]).id

const fetchAsset = async (path, type = 'text') => {
  const res = await fetch(`${window.location.origin}/${path}`, {
    headers: { 'User-Agent': `Pear ${clientId}` }
  })
  return type === 'text' ? res.text() : res.json()
}

export default function App () {
  useEffect(() => {
    fetchAsset('package.json', 'json').then(console.log)
    fetchAsset('index.html').then(console.log)
    fetchAsset('src/root.jsx').then(console.log)
  }, []);

  return (
    <div style={{ padding: 10, background: 'cyan' }}>
      <h1>MyApp</h1>
    </div>
  )
}
