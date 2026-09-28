export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  fullCaseStudy: {
    clientObjective: string;
    keySolutions: string[];
    featuresDelivered: string[];
    turnaroundTime: string;
  };
  image: string;
  demoUrl: string;
  tags: string[];
  accentColor: string;
}

export interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  business: string;
  quote: string;
  result: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_CONFIG = {
  designerName: "Jatin",
  role: "Web Designer",
  specialty: "Local Business Websites",
  whatsappNumber: "91XXXXXXXXXX", // Replace with your 10-digit number including country code
  instagramUsername: "YOURUSERNAME", // Replace with your Instagram handle
  email: "jatin.webdesign@example.com",
  location: "Open for projects worldwide · Local business specialist",
  turnaroundEstimate: "7–10 days typical delivery",
  currentAvailability: "Accepting 2 new client projects for this month",
};

export const PROJECTS: Project[] = [
  {
    id: "acefit",
    title: "AceFit Gym",
    tagline: "High-Energy Modern Fitness Studio Website",
    category: "Fitness & Wellness",
    description: "Modern fitness website concept designed to showcase premium facilities, membership tiers, and class schedules with high-conversion mobile CTAs.",
    fullCaseStudy: {
      clientObjective: "Upgrade an offline local gym's image to capture young professionals and convert foot traffic through digital passes.",
      keySolutions: [
        "Dark aesthetic with high-contrast neon accents emphasizing athletic energy",
        "Clear class timetables and transparent tier breakdown",
        "1-tap WhatsApp consultation and free trial pass reservation",
        "100% mobile-first layout optimized for gym-goers browsing on smartphones"
      ],
      featuresDelivered: [
        "Interactive Class Timetable",
        "Membership Comparison Table",
        "Trainer Showcase with Credentials",
        "Google Maps Studio Location & Hours",
        "WhatsApp Direct Join Button"
      ],
      turnaroundTime: "8 Days"
    },
    image: "/src/assets/images/gym_website_preview_1790603568526.jpg",
    demoUrl: "https://acefit11.netlify.app",
    tags: ["Fitness", "Dark Theme", "Mobile Optimized", "Local Lead Gen"],
    accentColor: "#22c55e",
  },
  {
    id: "sn-salon",
    title: "SN Salon",
    tagline: "Luxury Beauty & Hair Studio Showcase",
    category: "Salon & Spa",
    description: "Elegant salon website concept focused on services, refined styling, and creating an irresistible first impression for local clients.",
    fullCaseStudy: {
      clientObjective: "Position the salon as the top luxury hair and styling destination in town and streamline appointment inquiries.",
      keySolutions: [
        "Warm champagne and charcoal editorial aesthetic reflecting upscale service quality",
        "Interactive service menu categorized by hair, skincare, and bridal styling",
        "Visual transformation gallery showcasing real client results",
        "Direct click-to-book integration linking to WhatsApp and phone reservations"
      ],
      featuresDelivered: [
        "Categorized Treatment & Price Menu",
        "Before/After Transformation Gallery",
        "Stylist Portfolio Spotlight",
        "Instant WhatsApp Appointment Booking",
        "Google Reviews Embed Section"
      ],
      turnaroundTime: "7 Days"
    },
    image: "/src/assets/images/salon_website_preview_1790603583192.jpg",
    demoUrl: "https://snsaloon.netlify.app",
    tags: ["Beauty & Spa", "Luxury Editorial", "Service Menu", "Online Booking"],
    accentColor: "#eab308",
  },
  {
    id: "crunch-fitness",
    title: "Crunch Fitness",
    tagline: "Dynamic Athletic Club & Personal Training Portal",
    category: "Gym & Athletics",
    description: "Modern gym website concept created to showcase the business, highlight equipment amenities, and make its online presence professional.",
    fullCaseStudy: {
      clientObjective: "Increase walk-in memberships by offering a prominent 1-day free guest pass and clear facility walk-through.",
      keySolutions: [
        "Punchy bold typography with high-contrast action triggers",
        "Equipment zone showcases (Free Weights, Cardio Theater, Functional Turf)",
        "Instant guest pass modal for friction-free lead capture",
        "Fast-loading assets delivering sub-second performance on mobile 4G"
      ],
      featuresDelivered: [
        "Free Day Pass Lead Capture Flow",
        "Facility Virtual Walkthrough Gallery",
        "Personal Trainer Bio Cards",
        "Frequently Asked Membership Questions",
        "Click-to-Call & WhatsApp Bar"
      ],
      turnaroundTime: "9 Days"
    },
    image: "/src/assets/images/crunch_fitness_preview_1790603596187.jpg",
    demoUrl: "https://crunchfitness0.netlify.app",
    tags: ["Athletic Club", "Lead Generation", "Equipment Tour", "Fast Loading"],
    accentColor: "#f97316",
  },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Business Websites",
    subtitle: "Built specifically for local revenue drivers",
    description: "Custom-crafted websites for gyms, salons, cafés, restaurants, dental clinics, and local services designed to convert local searchers into paying clients.",
    deliverables: [
      "Custom responsive design",
      "Essential service & pricing pages",
      "Direct WhatsApp & click-to-call buttons",
      "Google Maps & business hours integration",
      "Fast mobile loading speeds"
    ]
  },
  {
    number: "02",
    title: "Website Design",
    subtitle: "Clean, bespoke layouts that match your brand",
    description: "Clean, professional layouts designed around your actual business, service offerings, and local customers — no generic cookie-cutter templates.",
    deliverables: [
      "Unique visual aesthetic suited to your industry",
      "High-contrast readable typography",
      "Structured product/service catalogues",
      "Trust-building social proof sections",
      "Frictionless customer contact paths"
    ]
  },
  {
    number: "03",
    title: "Responsive Design",
    subtitle: "Flawless on smartphones, tablets & desktops",
    description: "Over 70% of local customers browse on their phones while on the go. Your website will feel native, fluid, and lightning-fast on every screen size.",
    deliverables: [
      "Thumb-friendly tap zones & navigation",
      "Auto-scaling high-res photography",
      "Zero horizontal scrolling or awkward overflows",
      "Optimized assets for fast cellular data",
      "Cross-browser testing (Safari, Chrome, Firefox)"
    ]
  },
  {
    number: "04",
    title: "Website Redesign",
    subtitle: "Upgrade your outdated website into a client magnet",
    description: "Give an outdated or sluggish website a cleaner, modern, and credible look that reflects the true standard of your in-person service.",
    deliverables: [
      "Modernization of legacy design",
      "Faster load speeds & clean modern code",
      "Refined messaging and clearer call-to-actions",
      "Preservation of existing domain & brand equity",
      "Mobile-friendly overhaul"
    ]
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Modern Design",
    description: "Clean layouts, balanced negative space, and a professional visual style that immediately positions your business above local competitors."
  },
  {
    title: "Mobile Friendly",
    description: "Engineered specifically for smartphone visitors with large tap buttons, fast loading speeds, and effortless phone or WhatsApp triggers."
  },
  {
    title: "Business Focused",
    description: "Every section is built around what actually brings you revenue: inquiries, bookings, phone calls, and foot traffic."
  },
  {
    title: "Direct Communication",
    description: "Work directly with Jatin with no agency runaround, confusing technical jargon, or slow bureaucracy. Quick updates via WhatsApp."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Vikram Malhotra",
    role: "Founder & Head Coach",
    business: "IronCore Fitness",
    quote: "Jatin completely revamped our gym website in just over a week. Within the first month, our direct WhatsApp inquiries for membership passes doubled.",
    result: "+115% online trial inquiries"
  },
  {
    name: "Pooja Sharma",
    role: "Creative Director",
    business: "Aura Luxury Hair Spa",
    quote: "Clients constantly comment on how beautiful and clean our website looks. It perfectly captures our salon vibe and makes booking so simple for new visitors.",
    result: "40+ monthly bookings directly from mobile"
  },
  {
    name: "Rajesh Nambiar",
    role: "Owner",
    business: "Artisan Woodcraft & Interiors",
    quote: "Working with Jatin was effortless. He understood what local clients look for right away. Fast, professional, and zero headache.",
    result: "Delivered in 8 days with zero downtime"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does it take to design and launch my website?",
    answer: "Most local business websites are designed, refined, and launched within 7 to 10 days once we have your core details (services, photos, and contact info)."
  },
  {
    question: "How do customers get in touch through the website?",
    answer: "We integrate direct one-tap WhatsApp chat buttons, clickable phone numbers, an easy inquiry form, and Google Maps directions so customers can reach you with zero friction."
  },
  {
    question: "Do I need to have professional photos and written text ready?",
    answer: "Not necessarily. If you already have photos and text, great! If not, I will help structure the copy, provide clear guidance on what photos look best, or use high-quality domain imagery suited for your niche."
  },
  {
    question: "Will the website work properly on mobile phones?",
    answer: "Yes, 100%. We design mobile-first because the vast majority of local business searches happen on smartphones. Your site will load fast and look razor-sharp on iPhones and Androids."
  },
  {
    question: "Can I make updates after the website is launched?",
    answer: "Yes. The website is built with clean, modern code. We also offer straightforward ongoing maintenance or quick updates whenever you add new services or adjust pricing."
  }
];
