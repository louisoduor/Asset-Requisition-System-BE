// Component.js

import { apiRoutes } from './api'

function Component() {

  const fetchAssets = async () => {
    const response = await fetch(apiRoutes.assets)
    const data = await response.json()
    // do something with data
  }

  return (
    <button onClick={fetchAssets}>Fetch Assets</button>
  )
}
