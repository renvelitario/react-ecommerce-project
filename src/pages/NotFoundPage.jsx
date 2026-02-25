import Header from "../components/Header";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div>
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />

      <Header />

      <div className="not-found-container">
        <img className="error-img" src="https://static.vecteezy.com/system/resources/previews/008/326/235/non_2x/not-found-404-error-page-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="404 Error" />
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFoundPage;