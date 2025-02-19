import { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Find the property in the sample data
  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  // Return the property data
  res.status(200).json(property);
}