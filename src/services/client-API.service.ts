const PATH = `https://swapi.dev/api/people/`;

const APIrequest = async (): Promise<unknown | null> => {
  const url = `${PATH}?page=1`;
  try {
    const response: Response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    return null;
  }
};

export default APIrequest;
