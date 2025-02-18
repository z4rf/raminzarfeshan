import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    projects: Project[] = [

      {id: 0,
        name: "Letterboxd",
        pictures: ["../../assets/boxd/boxd1.png", "../../assets/boxd/boxd2.png", "../../assets/boxd/boxd3.png"],
        projectLink: "https://github.com/z4rf/letterboxd",
        summary: "Python solver for NYT's Letterboxed puzzle",
        description: "Using Python, I crafted a solution to the NYT daily game Letterboxed.  A simple game in which you need to chain together a series of words by bouncing from edge to edge of a square of letters, the solution was far from trivial.  I implemented a recursive strategy attempting to brute force every possible combination, but there were too many variables and the scope of the search exploded in size very quickly.  Comparing against a dictionary file was expensive and slow.  Naively trying every combination of letters led almost always to strings that were complete gibberish.  So I decided to read in my dictionary file into a data structure called a Trie.  I could encode words into the Trie such that each node was a letter of a word, and traversing down a path of the tree spelled out a word.  Using this Trie, I could now more intelligently search for words.  If I put together a string such that no real words could be generated after the letters I’d put together, the Trie would tell me as soon as I’d hit an invalid path, saving me many futile lookups.  \
        After completing the main problem solving code, I additionally configured an iOS shortcut to call this script remotely so I could execute my code on the go.  I hosted the script on my Raspberry Pi and call it via a simple setup (as can be seen in a screenshot above).\
        Overall, this project was very fun to put together and I hope to expand this idea to other daily games.",
        tags: [Tag.PYTHON, Tag.DATA_STRUCTURE, Tag.IOS]},
        
      {id: 1,
        name: "This Website",
        pictures: ["../../assets/site/page.png", "../../assets/site/ide.png", "../../assets/site/logos.png"],
        projectLink: "/",
        summary: "This website, which I personally host",
        description: "This website was written by me entirely in Angular, and hosted on an nginx server.  The nginx server sits within a Raspberry Pi in my apartment, and the domain name is provided by ionos.com.  I originially had this website created as a single static HTML page, but realized that not only did I want it to be more dynamic, I also wanted to demonstrate that I had skills developing with TypeScript technologies.",
        tags: [Tag.ANGULAR, Tag.NETWORKING]},
        
      {id: 2,
        name: "Morse Trainer",
        pictures: ["../../assets/morse/ide.png", "../../assets/morse/simulation.png", "../../assets/morse/morse-tree.png"],
        projectLink: "https://github.com/z4rf/morse",
        summary: "A morse code trainer built in Swift for iOS devices",
        description: "This is a simple app to help practice and memorize Morse code.  Morse code is a form of encoding letters using only dots and dashes.  The basic data structure of this app revolves around a binary tree.  As each node has only two children and there are only two inputs that can be used when spelling out a letter in morse code, I was able to encode the alphabet in a binary tree then read from the tree when the user inputs some combination of dots and dashes.  The user has the ability to store letters and clear all stored letters so that they can practice spelling entire words.",
        tags: [Tag.SWIFT, Tag.DATA_STRUCTURE]},
        
      {id: 3,
        name: "Storage Health Dashboard",
        pictures: ["../../assets/storage/table.png", "../../assets/storage/logos.png"],
        projectLink: "",
        summary: "Quickly assess health of storage services",
        description: "I completed this project while working an internship with ADP. I wrote almost all of the code for this project from scratch. The code that I didn't write from scratch I greatly optimized. There were three layers of applications involved in this project.  \
        React: The table was built using a bootstrap table component. In designing it, I had to balance readability with effective representation of data. Within the team I worked with, we decided that the level of information presented in the final product was perfect, especially when considered in the context of a larger dashboard.  \
        JS: in the background, there were JS calls that ran on intervals to keep the data in the dashboard up to date. The project that hosted this dashboard ran on a node server, so I created a node cron job to update the table every minute.  \
        Python: One of the greatest improvements I brought to the team was optimizing their calls to their database. Using asynchronous calls to one of their APIs, I reduced the runtime for a refresh of this table from 55 seconds to about 9.",
        tags: [Tag.PYTHON, Tag.REACT, Tag.NODE]},
        
      {id: 4,
        name: "ESH: Extensible Shell",
        pictures: ["../../assets/esh/esh.gif"],
        projectLink: "",
        summary: "Fully extensible and customizable shell written in C",
        description: "Using only C standard libraries, I built a shell with the functionality of an ordinary bash shell, with the added capability of handling plugins. The shell's base functionality consists of a few simple features: parsing input, job control, and signal handling. \
        Job Control: each command (when executed) is forked off and executed as its own process, the same way an ordinary shell would. If the command needs access to the entire terminal window (instead of simply printing to standard output) control is given to the command.  \
        Signal Handling: signals (like SIGKILL, SIGINT, SIGABRT) can be sent at any time during execution, and the shell is able to catch and appropriately handle these signals.",
        tags: [Tag.C]},
        
      {id: 5,
        name: "Threadpool",
        pictures: ["../../assets/pool/pool.png"],
        projectLink: "",
        summary: "Intelligent and efficient Threadpool, written in C",
        description: "Leveraging the C standard library's pthread.h header, I created a threadpool capable of recieving tasks and sharing work among its threads.  When a task is submitted to a threadpool, any available thread can begin executing it. However, when many tasks are submitted, threads implement work stealing and work sharing, which allows the threadpool to ease stress on any single thread should there be any.  \
        Locks and Semaphores: In C, these must be handled manually and were used to protect accesses to data multiple threads could modify.  \
        On the left, you can see the results of the threadpool using 16 threads to run quicksort on 90,000,000 elements.",
        tags: [Tag.C]},
        
      {id: 6,
        name: "Pixel Sorting",
        pictures: ["../../assets/pixels/boston.png", "../../assets/pixels/edge.png", "../../assets/pixels/hctpf.gif", "../../assets/pixels/floyd.png", "../../assets/pixels/market.png", "../../assets/pixels/randomFast.gif", "../../assets/pixels/river.png", "../../assets/pixels/Sierra.png", "../../assets/pixels/tunnel.png"],
        projectLink: "",
        summary: "Unique art created from simple algorithms",
        description: "Using a photo editing tool called GIFKR, I applied different variations of pixel sorting on some pictures I've taken in the past. As I created more images, I learned how to refine my process to get exactly what I want. You'll see my progress as you scroll down. Some use of Pixelmator was used as well for additional edits.",
        tags: [Tag.ART]}
    ]


  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError("There is no project with this id: " + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
