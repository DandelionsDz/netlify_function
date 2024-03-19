export default async (req, context) => {
  return new Response(`You're visiting ${city} in ${country}!`);
};
