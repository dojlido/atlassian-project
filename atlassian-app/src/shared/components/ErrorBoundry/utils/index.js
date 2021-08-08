const transformErrorsToReadableFormat = (errors) => {
  const toJson = JSON.stringify(errors);
  const standardObject = JSON.parse(toJson);

  return standardObject
    .filter((res) => res.status === "rejected")
    .map(({ reason }) => {
      return {
        statusText: reason?.message,
        method: reason?.config?.method,
        url: reason?.config?.url,
        productName:
          reason?.config &&
          reason.config.url.match(/confluence|jira|bamboo|fecru/g)[0],
      };
    });
};

export default transformErrorsToReadableFormat;
