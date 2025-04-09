import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for newsletter subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        return res.status(400).json({ message: "Email already subscribed" });
      }
      
      // Add new subscriber
      const subscriber = await storage.addSubscriber(validatedData);
      res.status(201).json({ message: "Successfully subscribed", email: subscriber.email });
    } catch (error) {
      res.status(400).json({ message: "Invalid data", error });
    }
  });

  // API route to get all subscribers
  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      res.status(200).json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching subscribers", error });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
