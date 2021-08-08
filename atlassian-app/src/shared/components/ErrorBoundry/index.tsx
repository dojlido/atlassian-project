import { ErrorObject } from "../../../interfaces/ErrorBoundryInterfaces";

interface ErrorBoundaryProps {
  errorMessage: ErrorObject[];
  atlasProductName: string;
}

const ErrorBoundary = ({
  errorMessage,
  atlasProductName,
}: ErrorBoundaryProps) => {
  return (
    <>
      {errorMessage &&
        errorMessage.map(
          ({ statusText, method, url, productName }) =>
            productName === atlasProductName && (
              <div className="error-boundry" role="alert">
                <h1>
                  Ups something went wrong with <span>{productName}</span>
                  column :( , but you are able to continue your work with our
                  other products :) Our team is already working on it! We will
                  try to fix this functionality as soon as possible!
                </h1>
                <h2 className="error-subheading">Detailed information:</h2>
                <p>
                  Status text: &quot;<span>{statusText}</span>&quot;
                </p>
                <p>
                  Method: &quot;<span>{method}</span>&quot;
                </p>
                <p>
                  Requested url: &quot;<span>{url}</span>&quot;
                </p>
              </div>
            )
        )}
    </>
  );
};

export default ErrorBoundary;
