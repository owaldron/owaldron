import * as images from './icons'

const aboutMeText = `
My name is Owen Waldron, and I study computer science at the University of Waterloo.
I am a proud cat enthusiast with a passion for exploring the intersection of technology, math, and physics.
My curious nature pushes me to new challenges and ways to grow in both my academic and personal life.
`

interface Taggable {
   title: string;
   date: string;
   tag: string;
   description: string;
   image: string;
   link?: string;
}

const educationHistory: Taggable[] = [
   {
      title: 'Bachelors of Computer Science',
      date: 'Sep 2022 - June 2027',
      image: images.Waterloo,
      link: 'https://uwaterloo.ca/future-students/programs/computer-science',
      tag: 'University of Waterloo',
      description: `Candidate for a Bachelor's of Computer Science (Co-op) with a minor in Physics. Sample courses include Object Oriented Software Development, Calculus 1 through 3, Linear Algebra, Elementary Algorithm Design and Data Abstraction.`,

   },
   {
      title: 'High School and IB Diplomas',
      date: 'Sep 2017 - June 2022',
      image: images.TFS,
      link: 'https://www.tfs.ca',
      tag: 'Toronto French School',
      description: 'Advanced Bilingual International Baccalaureate Diploma recipient. Awards for greatest achievement in higher level mathematics, higher level physics, and computer science.'
   }
]

const workHistory: Taggable[] = [
   {
      title: 'Junior Compiler Engineer',
      date: 'May 2025 - Aug 2025',
      image: images.Huawei,
      link: 'https://marquescg.com',
      tag: 'Huawei Technologies',
      description: `
Designed compiler passes in in C++ to optimize AI model execution on proprietary hardware accelerators.
Collaborated with hardware and AI teams to co-design software abstractions that maximized throughput in wireless
inference scenarios.
Contributed to a custom MLIR dialect for hardware-specific transformations and operator fusion.
`
   },{
      title: 'Junior Developer',
      date: 'Sep 2024 - Dec 2024',
      image: images.MCG,
      link: 'https://marquescg.com',
      tag: 'MarquesCG',
      description: `
Created reusable GitHub actions and template repositories to pioneer continuous deployment pipeline to Kubernetes.
Developed company website in Svelte and video conference speaker analysis tools using FastAPI and ReactJS.
Established frameworks for analysis of model accuracy and program efficiency to improve existing applications.
`
   },{
      title: 'Software Developer',
      date: 'Dec 2023 - May 2024',
      image: images.MMC,
      link: 'https://www.marshmclennan.com/',
      tag: 'Marsh McLennan',
      description: `
Developed internal workflow automation software as part of an Agile software development team &nbws
Collaborated with UX team to engineer a reusable React component library for internal use
Assembled technical documentation breaking down the integration and data architecture of various applications
Experimented with using generative AI to transform natural language into Camunda business process models by developing a proof of concept application.
`
   },{
      title: 'Course Marker',
      date: 'Sep 2023 - Dec 2023',
      image: images.Waterloo,
      link: 'https://uwaterloo.ca/',
      tag: 'University of Waterloo',
      description: `Part time job as a course marker for first year course MATH135: Algebra for Honours Mathematics. I am part of a team that marks student’s weekly assignments.`
   }, {
      title: 'Web Developper',
      date: 'May 2023 - Aug 2023',
      image: images.NYAC,
      tag: 'North York Aquatic Club',
      link: 'https://www.gomotionapp.com/team/cannyac/page/home',
      description: `Invented and implemented frameworks for quantitative analysis of swim club performance. Automated data visualization and performance report generation for board use through a web app interface. Developed feature rich web app with React.js frontend and a Django backend on an AWS server.`
   }, {
      title: 'Aquatics Instructor',
      date: 'July 2022',
      image: images.TAC,
      link: 'https://tacsports.ca/',
      tag: 'Toronto Athletic Camps',
      description: `
         Instructed swimmers ranging from first-time to competitive levels, adjusting to a new group and skill set each week. Cooperated with a team of instructors and coaches to manage over 300 campers.
      `
   }, {
      title: 'Competitive Swim Coach',
      date: 'Sep 2021 - June 2022',
      image: images.NYAC,
      link: 'https://www.gomotionapp.com/team/cannyac/page/home',
      tag: 'North York Aquatic Club',
      description: `
         Coordinated competitive swimming groups involving competition registration, writing and executing practices, and communicating with parents. Engineered a web application using Django to compute data relating to club performance for the use of the club head coach.
      `
   },
]


export { aboutMeText, educationHistory, workHistory };
export type { Taggable };
