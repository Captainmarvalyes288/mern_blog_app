import React from 'react'
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="error-page">
    <div className="center">
        <Link to="/" className="btn primary"> Direct to Homepage .. </Link>
         <h2> Page Not Found </h2>
    </div>
    </section>
  )
}

export default ErrorPage