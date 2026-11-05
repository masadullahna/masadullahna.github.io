import { useLayoutEffect } from "react";
import type { DocumentTitleOptions } from "./types";

const useDocumentTitle = (
  pageTitle: string | undefined,
  appName: string,
  options?: DocumentTitleOptions
) => {
  const separator = options?.separator ?? "|";
  const restoreOnUnmount = options?.restoreOnUnmount ?? false;

  const fullTitle = pageTitle?.trim()
    ? `${pageTitle.trim()} ${separator} ${appName}`
    : appName;

  useLayoutEffect(() => {
    const prevTitle = document.title;
    document.title = fullTitle;

    return () => {
      if (restoreOnUnmount) {
        document.title = prevTitle;
      }
    };
  }, [fullTitle, restoreOnUnmount]);
};

export default useDocumentTitle;
