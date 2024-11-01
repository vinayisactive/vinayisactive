import {ProjectInterface, SocialsInterface, BlogInterface as blog, SkillInterface as Skills } from "@/Interfaces/Interface"

export const resume = {
    url : "",
    text : "Resume"
}

export const skills: Skills[] = [
    {
        column : "Languages",
        technologies : ["JavaScript", "TypeScript", "Python"]
    },
    {
        column : "Frontend / UI ", 
        technologies : ["ReactJS", "NextJS", "Tailwind", "shadcn", "Redux Toolkit", "Zustand"]
    },
    {
        column : "Backend / Servers",
        technologies : ["NodeJS", "ExpressJS", "HonoJS", "Prisma", "Drizzle", "Mongoose", "Zod"]
    },
    {
        column : "Databases",
        technologies : ["SQL/MySQL", "Postgresql", "Mongodb", "Redis"]
    },
    {
        column : "API Development",
        technologies : ["REST", "tRPC"]
    },
    {
        column : "Others / Tools", 
        technologies : [ "Git/Github", "Cloudflare", "Serverless", "Edge fns", "Postman" ]
    }
]

export const projects: ProjectInterface[] = [
    {
      name: "useCustomHookSpace",
      logoUrl: "https://utfs.io/f/JffARKaQ1mkdU8OgS8XLrbCPFv5xKQDj4NsJwltGcqW8y03f",
      links: [
        {
          name: "Github",
          url: "https://github.com/vinayisactive/useCustomHookSpace",
        },
        {
          name: "Live",
          url: "https://usecustomhookspace.vercel.app",
        },
      ],
      details: [
        "Built with Next.js for efficient Server-Side Generation (SSG)",
        "Leveraging TypeScript for type-safe code and MongoDB as the database for user management.",
        "Clean, responsive UI and components crafted with Tailwind CSS.",
        "Offers custom hooks like useInfiniteScroll, useThrottle, usePrevious, useResponsive, useDebounce, useCurrentLocation, useRealTimeLocation, and useInternetConnection.",
        "Includes additional hooks like useScript, useIdle, useOnScreen, useDataAPI, useLocalStorage, useHasFocus and more."
      ]
    },
    {
        name: "Aestheticifier",
        logoUrl:  "https://utfs.io/f/JffARKaQ1mkdm54zUJhF5K13irj97HAMRfDG4uCBsqXvOwyS",
        links: [
            {
                name: "Github",
                url: ""
            },
            {
                name: "Live",
                url: ""
            }
        ],
        details: [
           "Coming Soon..."
        ]
    }
  ];

export const socials: SocialsInterface[] = [
    {
      name: "Gmail",
      id: "vinayisactive@gmail.com",
      url: "mailto:vinayisactive@gmail.com",
    },
    {
      name: "Github",
      id: "@vinayisactive",
      url: "https://github.com/vinayisactive",
    },
    {
      name: "X/Twitter",
      id: "@vinayisactive",
      url: "https://x.com/vinayisactive",
    },
    {
      name: "Linkedin",
      id: "@vinaysingh-chaudhary",
      url: "https://www.linkedin.com/in/vinaysingh-chaudhary",
    },
  ];

export const blogs: blog[] = [
    {
        title: "Mounting and Unmounting in the context of 🔨hook",
        url: "https://medium.com/@vinayisactive/mounting-and-unmounting-in-the-context-of-hook-04253869656d",
    },
    {
      title: "Vercel vs. Cloudflare in Serverless, and Edge Environments",
      url: "",
  },
]; 