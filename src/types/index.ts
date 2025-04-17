import { Types } from "mongoose";

export interface User {
    id: string;
    name: string;
    email: string;
    location?: string;
    bio?: string;
    skills: Types.ObjectId[];
    experiences: Experience[];
    createdAt: Date;
    important?: boolean
}

export interface Experience {
    title: string;
    yearsOfExperience: number;
    description?: string;
    level: "Novice" | "Intermediate" | "Advanced" | "Expert"
}

export interface UserCredentials {
    name?: string;
    email: string;
    password: string;
    location?: string;
    bio?: string;
}