import * as TobaImages from './tobatalks'; 
import * as Donuts from './donut';
import * as BlackJack from './blackjack';
import * as Fuser from './fuser';
import * as DataPool from './datapool';
import * as WaveAI from './waveai';
import * as MonoDepth from './monodepth';

type Lynk = {
    to: string;
    text: string;
}
type Project = {
    name: string;
    url: string;
    tldr: string;
    description: string;
    tags: string[];
    images: string[];
    links: Lynk[];
}

const projects: Project[] = [

// Mono Depth
{
    name: 'Depth Estimation',
    url: 'monodepth',
    tldr: `
    For my computer vision course, me and a partner trained an unsupervised convolutional neural network to estimate image depth.
    `,
    description: `
As the final project for my CS 484 Computational Vision course, we created a convolutional neural network capable of estimating a depth map in driving scenarios. What was most interesting about this project was that we were able to leverage the geometry of the problem to enable  unsupervised learning. This is because the dataset featured left and right images taken by two cameras for each scene, so the network learned to produce pixel-wise disparity maps, which are correlated to the distance of the corresponding object. We followed some papers and produced a report, which is partly available in the GitHub link.    `,
    tags: ["pytorch", "CNNs"],
    links: [{
        text: 'GitHub',
        to: 'https://github.com/OliverTattersall/monoDepthEstim'
    }],
    images: Object.values(MonoDepth)
},

// Data Pool
{
    name: 'DataPool',
    url: 'datapool',
    tldr: `
    I was employed by my former swim club to create an application capable of analyzing group competitive swimming data.
    `,
    description: `
DataPool started as a passion project during my time as a competitive swimmer and coach. After noticing a lack of alternatives, I developed a Django project capable of analyzing swimming data. After my club’s head coach and board of directors had seen my prototype, they employed me to continue development of the app for their use in analyzing our club’s performance. Once employed, I developed a React.js frontend and expanded the app’s functionality by researching, inventing and automating a greater range of group swimming performance analysis frameworks.
`,
    tags: ["Django", "React.js"],
    links: [{
        text: 'Project Link',
        to: 'https://data-pool.ca'
    }],
    images: Object.values(DataPool)
},

// WaveAI
{
    name: 'WaveAI',
    url: 'waveai',
    tldr: `
To practice a new language, WaveAI lets you talk with an AI in your chosen language in a facetime-like format.
`,
    description: `
One of my good friends had an idea for an app that allowed language learners to practice their conversational skills by talking to an AI. Together with my technical knowledge, we envisioned an iOS app that could realize her idea. Since then, we have begun working on it. My responsibility as the lead developer is to implement her designs in SwiftUI, establish the connection to OpenAI’s ChatGPT via API calls, and ensure the functionality of the app using the MVVM architecture. I’ve successfully developed the primary feature of the app, however it is still a work in progress.
`,
    tags: ["iOS", "Swift", 'OpenAI'],
    links: [],
    images: Object.values(WaveAI)
},

// Toba Talks
{
    name: 'Toba Talks',
    url: 'toba-talks',
    tldr: `
    Collaborated with classmates to envision and create an iOS application to facilitate communication for non-verbal individuals
    `,
    description: `
In highschool, my friend had an non-verbal autistic younger brother who depended on text-to-speech apps to communicate. As she was upset with the affordability and capability of the existing apps, she proposed we create our own using what we had learned from iOS development. In our team, I took the role of lead developer, responsible for implementing the MVVM architecture that the app relied on as well as implementing data persistence through the iOS file system.
`,
    tags: ["iOS", "Swift", 'SwiftUI'],
    links: [{
        text: 'GitHub',
        to: 'https://github.com/owaldron/TobaTalk'
    }],
    images: Object.values(TobaImages)
},

// FUSER
{
    name: 'FUSER',
    url: 'fuser',
    tldr: `
    I constructed an iOS virtual store demo to showcase UI/UX principles, Firebase connectivity, and User objects.
    `,
    description: `
As my Grade 12 Computer Science class final project, we created a virtual store demo for iOS. Using SwiftUI, the demo fetches user and product data from a Firebase online database, updating it through API calls whenever a user adds an item to cart, changes their password, or registers.
`,
    tags: ['iOS', 'SwiftUI', 'Firebase'],
    links: [{
        text: 'GitHub',
        to: 'https://github.com/owaldron/FUSER'
    }],
    images: Object.values(Fuser)
},

// Donut.py
{
    name: 'Donut.py',
    url: 'donut',
    tldr: `
Inspired by the infamous "donut.c", I created a vector graphics engine in python using techniques from calculus and linear algebra.
`,
    description: `
In my highschool math class, we had a project to apply what we had learned in a real world setting. Inspired by the infamous "donut.c", I created a vector graphics engine in python using techniques from calculus and linear algebra. I created parameterized equations for different shapes, and rendered them using a z-buffer and specular lighting techniques.
    `,
    tags: ['Python', 'Vector Graphics'],
    links: [{
        text: 'GitHub',
        to: 'https://github.com/owaldron/Donut'
    }],
    images: Object.values(Donuts)
},

// BlackJack
{
    name: 'BlackJack',
    url: 'blackjack',
    tldr: `
Using ReactJS, I created blackjack powered by a deck of cards API.
`,
    description: `
Using ReactJS, I created blackjack powered by a deck of cards API. The cards are "drawn" from an external server which keeps track of the deck. Currently, there are no stakes to each game, but it's fun nonetheless! This project was done to showcase my grasp of the basics of React and interacting with a web API
`,
    tags: ['React.js'],
    links: [{
        text: 'Project Link',
        to: 'https://blackjack-git-master-owaldron.vercel.app/',
    }, {
        text: 'GitHub',
        to: 'https://github.com/owaldron/blackjack'
    }],
    images: Object.values(BlackJack)
}];

export default projects;
export type { Project };

