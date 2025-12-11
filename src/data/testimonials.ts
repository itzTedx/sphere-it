export const TESTIMONIALS: Testimonial[] = [
	{
		id: 1,
		name: "Ajay Dudhe",
		designation: "Data Engineer, Dubai, UAE",
		avatar: "/",
		content:
			"My experience with Sphere IT has been extremely positive, with a smooth and well-structured onboarding process. Vidya Chandran guided me throughout with exceptional professionalism and support. My current role aligns perfectly with my career goals, and the collaborative team culture makes the work truly fulfilling.",
		industry: "Banking / Financial Services",
	},
	{
		id: 2,
		name: "Sumit Kahat",
		designation: "Open Finance Consultant, Dubai, UAE (RAKBANK)",
		avatar: "/",
		content:
			"I’ve been with Sphere IT for over six months, and the hiring and onboarding processes were efficient and well-organized. Working on the Open Finance project at RAKBANK has been a great experience, supported by transparent communication and an open, collaborative culture. Sphere IT’s continuous support has made the journey productive and positive.",
		industry: "Talent & Resource Augmentation",
	},
	{
		id: 3,
		name: "Cheithanya Judagiri ",
		designation: "Database Consultant, Sharjah (CBD)",
		avatar: "/",
		content:
			"Collaborating with Sphere IT has been a great experience, thanks to their meticulous onboarding and proactive support. Their execution is seamless, and I’ve appreciated the opportunity to work on impactful projects. I’m genuinely happy with the partnership and the professional environment.",
		industry: "Talent & Resource Augmentation",
	},
	{
		id: 4,
		name: "Owais Nismo",
		designation: "Software Engineer, Chennai, India (ENBD)",
		avatar: "/",
		content:
			"My experience with Sphere IT has been smooth, with everyone supporting me through the transition. I enjoy the variety of work and exposure to multiple tech stacks in my current role. The hiring and placement process was timely, clear, and hassle-free.",
		industry: "Talent & Resource Augmentation",
	},
	{
		id: 5,
		name: "Mahendra Chozhan",
		designation: "Senior AI Program Manager, Dubai (RAKBANK)",
		avatar: "/",
		content:
			"Working with Sphere IT has been a deeply positive experience, especially because of their responsiveness and focus on employee engagement. Their proactive check-ins for deployed employees make a real difference. The accessibility of their C-level leadership reflects strong, transparent values across the company.",
		industry: "Banking / Financial Services",
	},
	{
		id: 6,
		name: "Satbir Sahmey",
		designation: "Data Engineer, Dubai, UAE (Emirates NBD)",
		avatar: "/",
		content:
			"Sphere IT made the entire experience effortless, from onboarding to ongoing support. My role gives me strong ownership and meaningful challenges that help me grow. The hiring process was fast, transparent, and well-coordinated.",
		industry: "Retail / E-commerce",
	},

	{
		id: 7,
		name: "Hurmit",
		designation: "Software Engineer, Bengaluru (ENBD)",
		avatar: "/",
		content:
			"The onboarding was smooth, and Avin kept me fully updated throughout the process. Working at ENBD through Sphere IT has been a great experience, with Shipra and the team always ready to support. The role has helped me grow my skills, and the hiring process was clear, responsive, and truly supportive.",
		industry: "Banking / Financial Services",
	},
];

export type Testimonial = {
	id: number;
	name: string;
	avatar: string;
	designation: string;
	content: string;
	industry: string;
};
