interface IParam {
  [paramName: string]: string;
}

interface IParams {
  params: IParam;
}

export function prepareHttpParams(params: TQueryParams = {}): IParams {
  const preparedParams: IParam = Object.keys(params).reduce(
    (accumulatingParams: IParam, paramName: string) => {
      accumulatingParams[paramName] = String(params[paramName]);

      return accumulatingParams;
    },
    {},
  );

  return {
    params: preparedParams,
  };
}
