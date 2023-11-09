import RecentlyViewed from "./RecentlyViewed"

const ErrorBoundary = () => {
  return (
    <div>

      <h1>404 Page not found</h1>
      <p className="errorP">It looks like this page does not exist</p>
      <RecentlyViewed />
    </div>
  )
}

export default ErrorBoundary