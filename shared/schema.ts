import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";

// Contact form schema
export const contactSchema = z.object({
  id: z.string().default(() => crypto.randomUUID()),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  createdAt: z.date().default(() => new Date()),
});

export const insertContactSchema = contactSchema.omit({ id: true, createdAt: true });

export type Contact = z.infer<typeof contactSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;

// Project data types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: 'web' | 'ml' | 'ai';
  featured: boolean;
}

// Experience data types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'remote' | 'onsite';
  achievements: string[];
  technologies: string[];
}

// Skill category types
export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}