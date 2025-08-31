import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { isRouteErrorResponse, useRouteError } from "react-router";

export function ErrorBoundary() {
  const error = useRouteError();

  let is404 = false;
  let title = "Oops! Something went wrong";
  let description =
    "We encountered an unexpected error. Please try refreshing the page or contact us if the problem persists.";

  if (isRouteErrorResponse(error)) {
    is404 = error.status === 404;
    if (is404) {
      title = "Page Not Found";
      description =
        "The page you're looking for doesn't exist or has been moved.";
    }
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <main className='from-background to-background/80 flex min-h-screen items-center justify-center bg-gradient-to-br p-4'>
      <div className='w-full max-w-md space-y-8 text-center'>
        {/* Error Icon */}
        <div className='relative'>
          <div className='bg-danger/10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full'>
            <Icon
              className='text-danger h-12 w-12'
              icon={is404 ? "lucide:file-x" : "lucide:alert-triangle"}
            />
          </div>
          {/* Decorative elements */}
          <div className='bg-warning/20 absolute -top-2 -right-2 h-6 w-6 animate-pulse rounded-full'></div>
          <div className='bg-primary/20 absolute -bottom-1 -left-1 h-4 w-4 animate-pulse rounded-full delay-1000'></div>
        </div>

        {/* Error Content */}
        <div className='space-y-4'>
          <h1 className='text-foreground text-4xl font-bold'>
            {is404 ? "404" : "Oops!"}
          </h1>
          <h2 className='text-foreground/80 text-2xl font-semibold'>{title}</h2>
          <p className='text-default-600 leading-relaxed'>{description}</p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Button
            className='bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105'
            onPress={handleRefresh}
            startContent={
              <Icon
                className='h-4 w-4'
                icon='lucide:rotate-cw'
              />
            }
          >
            Refresh Page
          </Button>
          <Button
            className='bg-default hover:bg-default/80 text-default-foreground rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105'
            onPress={handleGoHome}
            startContent={
              <Icon
                className='h-4 w-4'
                icon='lucide:home'
              />
            }
            variant='bordered'
          >
            Go Home
          </Button>
        </div>

        {/* Development Error Details */}
        {import.meta.env.DEV && error && error instanceof Error && (
          <details className='bg-default/50 mt-8 rounded-lg p-4 text-left'>
            <summary className='text-default-700 mb-2 cursor-pointer text-sm font-medium'>
              Development Error Details
            </summary>
            <div className='space-y-2'>
              <p className='text-danger text-sm font-medium'>{error.message}</p>
              {error.stack && (
                <pre className='text-default-600 bg-background/50 max-h-40 overflow-x-auto overflow-y-auto rounded p-3 text-xs'>
                  <code>{error.stack}</code>
                </pre>
              )}
            </div>
          </details>
        )}
      </div>
    </main>
  );
}
