import { client } from "@/config/client";

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: 5;
  text: string;
}

export const reviewsSummary = {
  totalReviews: 32,
  averageRating: 5.0,
  fiveStarPercentage: 100,
  googleReviewUrl: "#",
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    date: "March 2025",
    rating: 5,
    text: "Fantastic job on our garden. It was completely overgrown and they transformed it in a single day. Reliable, efficient and great value for money — highly recommended.",
  },
  {
    id: 2,
    name: "David Clarke",
    date: "February 2025",
    rating: 5,
    text: "We've been using them for nearly a year now for regular lawn mowing and hedge trimming. Always on time, always leaves the garden looking immaculate. Couldn't ask for more.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    date: "January 2025",
    rating: 5,
    text: "Called for a quote and they came out the very next day. Really listened to what I wanted, gave honest advice and the price was very reasonable. The garden looks amazing now.",
  },
  {
    id: 4,
    name: "Michael Brown",
    date: "December 2024",
    rating: 5,
    text: "Excellent service from start to finish. New fencing, hedge trimming and a full garden tidy-up — all done to a very high standard. Will definitely be using again.",
  },
  {
    id: 5,
    name: "Rachel Hughes",
    date: "November 2024",
    rating: 5,
    text: "What a difference! Our garden had been neglected for months and they brought it back to life. Professional, friendly and left everything spotless. Highly recommend.",
  },
  {
    id: 6,
    name: "James Taylor",
    date: "October 2024",
    rating: 5,
    text: "Great communication throughout. Turned up when they said they would, did exactly what was agreed, and the price was fair. Quality hedge trimming service.",
  },
  {
    id: 7,
    name: "Lisa Patel",
    date: "September 2024",
    rating: 5,
    text: "Used them for an end of tenancy garden clearance and they were absolutely brilliant. Can't believe the difference. Professional and a pleasure to deal with.",
  },
  {
    id: 8,
    name: "Andrew Mitchell",
    date: "August 2024",
    rating: 5,
    text: "Reliable, honest and does a fantastic job every time. Our garden has never looked better. Booked in for regular monthly visits now.",
  },
  {
    id: 9,
    name: "Karen Stevens",
    date: "July 2024",
    rating: 5,
    text: "Really pleased with the work done today. They cleaned up after themselves and the garden looks really good. Would definitely recommend to anyone.",
  },
  {
    id: 10,
    name: "Chris Walker",
    date: "June 2024",
    rating: 5,
    text: "Within 24 hours they were on the job. Great communication, super professional and excellent work on our garden and hedges. Highly recommended!",
  },
  {
    id: 11,
    name: "Sophie Davis",
    date: "May 2024",
    rating: 5,
    text: "Amazing service. So reliable when you need them. Quality, professionalism and great value. Would recommend to anyone looking for garden maintenance.",
  },
  {
    id: 12,
    name: "Mark Robinson",
    date: "April 2024",
    rating: 5,
    text: "Great team. Removed old broken fencing and installed new heavy-duty panels and posts. Neat, tidy work and very fairly priced. Already booked them for more work.",
  },
  {
    id: 13,
    name: "Helen Wright",
    date: "March 2024",
    rating: 5,
    text: "Garden has been tidied, bushes pruned, grass mowed and beds weeded. Very pleased with the result and the professional approach. Have booked another visit!",
  },
  {
    id: 14,
    name: "Tom Jenkins",
    date: "February 2024",
    rating: 5,
    text: "Great gardener, did a very good job and very reliable. Lawn looks perfect and the edges are crisp. Will be using regularly going forward.",
  },
  {
    id: 15,
    name: "Claire Evans",
    date: "January 2024",
    rating: 5,
    text: "The definition of a good gardener. Communicates well, does a great job and doesn't overcharge. Happy customer, happy outside space!",
  },
  {
    id: 16,
    name: "Daniel Murray",
    date: "December 2023",
    rating: 5,
    text: "Great job weeding the front and back of the house and cutting the grass. Garden looking much tidier now. Will be using again soon.",
  },
];
