import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1>Page not found</h1>
        <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage
