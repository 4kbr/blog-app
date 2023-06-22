const BASEURL: string = process.env.URI!;
export const fetchPublic = async (
  paramsUri: string,
  options?: RequestInit | undefined
) => await fetch(`${BASEURL}${paramsUri}`, options);
