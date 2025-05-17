import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
<div id="error-page" class="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
  <h1 class="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
  <p class="text-lg mb-4">Sorry, an unexpected error has occurred.</p>
  <p class="text-sm text-gray-500">
    <i>{error.statusText || error.message}</i>
  </p>
  <a href="/" class="mt-6 text-blue-600 hover:underline">
    Go back to Home
  </a>
</div>

  );
}