export const fetchCoordinates = async () => {
  const response = await fetch(
    'https://api.wheretheiss.at/v1/satellites/25544',

  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  const coordinates = await response.json();
  const longitude = Number(coordinates.toFixed(4));
  const latitude = Number(coordinates.toFixed(4));
  return { longitude, latitude };
};
