import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robots = `
User-agent: *
Allow: /

Sitemap: https://www.lt-controls.com/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(robots);
}