import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'; 
import { MobileService } from 'src/app/services/mobile.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private mobileService: MobileService, private domSanitizer: DomSanitizer) { }

  courseName: string = "";

  courseIndex: number;
  courseNames = [
    'computer_network_security',
    'adv_cyber_security',
    'system_administration',
    'digital_forensics',
    'unix_os'
  ];

  courseInfo = {
    "computer_network_security": {
      title: "INFOTC 3810: Computer Network Security",
      description: `This course covers principles of networking configuration and security authentication, IP security, network management security, wireless security,
       and system security by studying attacks on computer systems, network, and the Web as well as detection and prevention. 
       
       Work is completed in Unix/Linux environments and in Microsoft Windows environment. Students will need to setup a virtual private infrastructure to perform multiple tasks; additionally unlimited AWS cloud resources 
       will be available for them. The course emphasizes "learning by doing" and has a 90% hands on and 10% theory approach. Much of this information consists of skills 
       and abilities that employers want and expect in the real world of IT in a small to medium size organization.`,
      objectives: [
        {
          text: "Compare and configure routing protocols.",
          icon: 'git-compare',
          color: 'primary'
        },
        {
          text:  "Determine the benefits of isolated network connections.",
          icon: 'eye-off',
          color: 'danger'
        },
        {
          text: "Protect computer systems and networks from unauthorized access.",
          icon: 'shield-checkmark',
          color: 'success'
        }
      ],
      topics: [
        'Router Configuration',
        'Routing Protocols (RIPv1, RIPv2, EIGRP, OSPF)',
        'Subnetting (Fixed, VLSM)',
        'VLANS',
        'Inter VLAN Routing',
        'Host-based Firewalls',
        'VPNs',
        'Vulnerability Scanning'
      ],
      hours: 3,
      prereq: "INFOTC 2810 or Instructor Consent",
      mode: 'E-Learning 100% Online',
      image: '../../../assets/netsec.jpg'
    },
    "adv_cyber_security": {
      title: "INFOTC 3910: Advanced Cyber Security",
      description: `This course is designed to help students develop a deeper understanding of modern information and system protection technology and methods,
      including examining the various areas of network security including intrusion detection, reconnaissance, exploitation, and defense against cyber-attacks, 
      as well as principles and techniques for digital forensics investigation.
      Work is mainly completed in Unix/Linux environments and partially in Microsoft Windows environment. Students will need to setup a virtual private infrastructure 
      to perform multiple tasks. The course emphasizes "learning by doing". Much of this information consists of the skills and abilities that employers want and expect in the real world of IT – in a small to medium size organization.`,
      objectives: [
        {
          text: "Compare different system information gathering techniques for computer networking attacks.",
          icon: 'bar-chart',
          color: 'primary'
        },
        {
          text:  "Differentiate the type of password attacks.",
          icon: 'key',
          color: 'danger'
        },
        {
          text: "Execute different remote attacks using different exploitation frameworks.",
          icon: 'bug',
          color: 'dark'
        },
        {
          text: "Perform additional attack methods that include the mitigation process.",
          icon: 'contract-outline',
          color: 'tertiary'
        }
      ],
      topics: [
        'Introduction to Ethical Hacking',
        'Footprinting and Fingerprinting',
        'Types of Password Attacks',
        'Remote Attacks with Exploitation Frameworks',
        'Network Security (Wireless Technologies)',
        'Common Types of Attacks'
      ],
      hours: 3,
      prereq: "INFOTC 2910 or Instructor Consent.",
      mode: 'E-Learning 100% Online',
      image: '../../../assets/advcybersec.jpg'
    },
    "system_administration": {
      title: 'INFOTC 3850: Computer System Administration',
      description: `This course is an introduction to Computer System Administration, we introduce the basic knowledge, skills, information, and procedures required for the stable and reliable management and administration of an organization's computer systems.
       The course covers the planning, design, installation, maintenance, security, management tasks, tools, responsibilities, and ethics associated with being a Computer System Administrator.
       
       Work is completed in both Linux and Windows environments. Students will need to setup a virtual private infrastructure to perform multiple tasks; unlimited AWS cloud resources will be available for students.
       The course emphasizes "learning by doing". Much of this information consists of skills and abilities that employers want and expect in the real world of IT – in a small to medium size organization.`,
       objectives: [
         {
           text: 'Compare the configuration and administration of Linux and Microsoft Windows systems.',
           icon: 'hammer',
           color: 'secondary'
         },
         {
          text: 'Distinguish basic computer networking.',
          icon: 'wifi',
          color: 'tertiary'
         },
         {
           text: 'Explain system configuration in local and cloud environments.',
           icon: 'construct',
           color: 'primary'
         }
       ],
       topics: [
         'Linux Commands and Utilities',
         'Network Configuration',
         'Subnetting',
         'Linux Services Configuration and Administration',
         'DHCP',
         'DNS',
         'HTTP and Web Servers',
         'SSH and OpenSSH',
         'Microsoft Windows Server',
         'Microsoft Active Directory Services Configuration and Administration'
       ],
       hours: 3,
       prereq: 'INFOTC 2040 or CMP_SC 2050, junior standing, or Instructor Consent.',
       mode: 'E-Learning 100% Online',
      image: '../../../assets/sysadmin.jpg'
    },
    "digital_forensics": {
      title: "CMP_SC/INFOTC 4910: Digital Forensics",
      description: `This course introduces an overview of basic Digital Forensics procedures and techniques to enable students to perform a digital investigation of physical storage media and volume analysis, including preservation, analysis and acquisition of artifacts that reside in hard disk and random access memory, for Linux and Windows systems.
      Work is completed in Unix/Linux environments and in Microsoft Windows environment. Students will need to setup a virtual private infrastructure to perform multiple tasks. The course emphasizes "learning by doing". Much of this information consists of skills and abilities that employers want and expect in the real world of IT – in a small to medium size organization.`,
      objectives: [
        {
          text: "Prepare the students to conduct digital investigations in an organized and systematic way.",
          icon: 'search',
          color: 'tertiary'
        },
        {
          text:  "Analyze various modern digital forensics technologies.",
          icon: 'analytics',
          color: 'primary'
        }
      ],
      topics: [
        'Overview of Digital Investigations and Digital Evidence',
        'Linux and Windows File Systems',
        'Cyber Incident Response',
        'Data Acquisition on Physical Storage Devices',
        'File Recovery',
        'File Carving and Document Analysis',
        'Forensics over Windows and Linux Services'
      ],
      hours: 3,
      prereq: "INFOTC 3910 (Advanced Cyber Security) or Instructor Consent.",
      mode: 'E-Learning 100% Online',
      image: '../../../assets/forensics.jpg'
    },
    "unix_os": {
      title: 'CMP_SC/INFOTC 3530: UNIX Operating System',
      description: `This course is an introduction to UNIX and UNIX-like operating systems and interfaces, that includes the filesystem, command shells, text editors, 
      pipes and filters, input/output system, shell scripting, computer networking, regular expressions, containers, introduction to cloud computing and Computer System Administration.
      Work is completed in different Linux distributions including RHEL (Red Hat). Students will need to setup a virtual private infrastructure to perform multiple tasks;
      unlimited AWS cloud resources will be available for students as well. The course emphasizes "learning by doing" through hands-on laboratories and exploratory projects.
      Much of this information consists ofskills and abilities that employers want and expect in the real world of CS and IT – in a small to medium size organization.`,
      objectives: [
        {
          text: "Demonstrate competence in local and remote virtual environments of different Unix-like OS.",
          icon: 'terminal',
          color: 'dark'
        },
        {
          text:  "Demonstrate competence in Unix-like system administration.",
          icon: 'folder',
          color: 'secondary'
        },
        {
          text:  "Explain basic computer networking concepts applied to Unix-like systems",
          icon: 'globe',
          color: 'tertiary'
        },
        {
          text:  "Correctly configure different services for Unix-like OS",
          icon: 'settings',
          color: 'primary'
        }
      ],
      topics: [
        "UNIX Overview and History",
        "UNIX Commands and Utilities",
        "UNIX Users, Groups, and Permissions",
        "UNIX Filesystems and Storage Device Formatting",
        "Shell Scripting",
        "Process Automation",
        "Regular Expressions (RegEx)",
        "Computer Networking",
        "Cloud Computing",
        "Containers",
        "Introduction to System Administration"
      ],
      hours: 3,
      prereq: "IT2040, CS2050, or Instructor Consent",
      mode: 'In-Person OR E-Learning 100% Online (varies per semester)',
      image: '../../../assets/unix.jpg',
      quotes: [
        'By every metric, this class was wonderful. The lectures were clear, concise, and well produced. The class content was relevant and interesting. The labs were engaging and help was always useful and given quickly.',
        'This course really brought together the ‘why’ behind all of my other courses. The skills learned in this course are applicable to all of my other projects, both in school and outside of school.',
        'The teaching was amazingly done, everyting was well structured, and it was an enjoyable environment to be in.',
        'The instructor was knowledgeable and positive.',
        'I like how the course progressed and built upon previous parts of the course. Many things taught to us were actually useful things to know.',
        'I enjoyed learning about something I didn\'t ave a lot of experience with and I thought the professor did a really good job of explaining things.',
        'Lots of hands-on experience in class and with assignments/final project was a good mashup of everything we learned through the semester.',
        'This class was fun to learn something new and was a very good intro to Linux. Teacher and TA were very helpful in getting things thought out.',
        'Content is real useful and taught well. This should be a required year one course for all engineering students so they can use linux better throughout their time here!'
      ],
      projects: [
        {
          by: 'Justin Nguyen',
          title: 'The Effectiveness of Wi-Fi Protected SetupTM(WPS) on the Security of Wireless Computer Networks',
          desc: 'With the growing demand for wireless devices such as the Internet of Things (IoT devices) to power smart homes and provide assistance to the elderly and those with disabilities, consumers and businesses look for ways to connect these devices to their wireless computer networks in a simple and secure way. As a response to this dilemma, the Wi-Fi Alliance® group devised the Wi-Fi Protected Setup TM (WPS) standard to simplify the process of connecting devices to computer networks wirelessly with a push of a button in a secure manner. However, a flaw in the implementation of this standard was discovered by Dominique Bongard in 2014 and coined the Pixie Dust attack, which allowed hackers to gain unauthorized access to wireless computer networks in mere seconds by brute-forcing the 8-digit PIN offline. This raises the question if WPS isa security issue in our current computer networks. This study will examine if the Pixie Dust attack no longer works on high-end wireless routers, or access points that are currently on the market. Due to the extremely small sample size of this study, the security of WPS remains inconclusive because it cannot be determined if the Pixie Dust attack failed since manufacturers implemented a patch or if the attack only affects certain chipsets. In light of this uncertainty, it was concluded that disabling the WPS feature entirely on all wireless devices would be the best course of action until the Wi-Fi Alliance® group releases a new security standard to replace WPS.',
          doc: '/jnguyen-unix.pdf',
          year: 'Fall 2020'
        },
        {
          by: 'Andy Schuster',
          title: 'Raspberry Pi, just not the Pie Kind',
          year: 'Fall 2020',
          desc: `Do you despise ads and are interested in learning about Raspberry Pi (not the pie kind)? A Raspberry Pi is a low-cost credit-card sized computer that is capable of many things. The Raspberry Pi default OS is Raspbian, a Debian-based OS and a form of Linux distribution, so the commands we have used throughout the semester will come in handy. If you want build a smart mirror that includes voice commands, the Pi can do that. If you want to create a retro gaming console to reminisce childhood memories, the Pi is also capable of doing that too. 
          A networking tool that blocks most ads and is fairly easy to install on a Raspberry Pi is Pi-Hole. Pi-Hole works as a DNS server that uses a list of known list of domain names from advertising, tracking, and analytics services to block ads on your network. As a DNS server, this allows the Pi-hole to intercept any outgoing or incoming DNS requests and can block or pass certain domains from accessing your device, keeping your computer and other devices safe from ads. 
          I walk through the basics. This includes flashing the OS to the sim card to teaching how to set up SSH on the Pi to connect remotely. Lastly, I walk through how to install the network-wide ad blocker, Pi-Hole, on a Pi and how to connect to it either network wide or to individual devices. Once installed, enjoy ad-free apps to ad-free websites. `,
          doc: '/aschuster-unix.docx'
        },
        {
          by: 'Brian Jiang',
          title: 'Security Issues with UNIX-Like Systems',
          year: "Fall 2020",
          doc: '/bjiang-unix.docx',
          vid: 'https://www.youtube.com/embed/ufM40h5IUSk',
          desc: `Operating system security has had lots of issues because users on the computer debug and program the code that causes vulnerabilities. Security in an operating system will protect the system being controlled on the computer. The confidentiality, availability and integrity triad issues occur from confidential data being stolen along with data being modified or deleted by hackers. UNIX/Linux is the most secure operating system but still have issues.

          UNIX/Linux is a very popular operating system because the source code is available to the public and that linux can be modified unintentionally or on purpose. Commands and tools can be used to hack the operating systems to gain unauthorized access. As a result of that, vulnerabilities may occur in the computer systems from vulnerability scanning, network scanning along with password cracking.
          
          The types of attacks in UNIX/Linux security are physical, social engineering and dumpster diving. Physical security attacks are where the hackers modify the files that are the most critical, and that physical security is important for keeping the operating system secure. Social engineering attacks are where the users are tricked by running a program that they thought is risk free and it’s important to keep your devices secure and watch out on what emails you’re getting. Dumpster diving attacks occur when password lists are shown without shredding and that information is found while attacking a network. Security issues can be solved by having the abilities on the security status of each computer system and that the users can catch any hackers that wrongfully use the system.`,

        },
        {
          by: 'Malek Necibi',
          title: 'Predicting Daily Local Weather Information using Recorded Historical Climate Data from NOAA’s NCDC',
          doc: '/mnecibi-unix.docx',
          script: '/predictWeather.sh',
          vid: "https://www.youtube.com/embed/MmGoBgXbnCk",
          year: 'Fall 2020',
          desc: `Meteorology, or the study of atmospheric phenomena such as weather and climate, has advanced tremendously over the past several decades. New prediction techniques have pushed the limits of weather forecasting from merely a few hours to several days into the future. Even so, hurdles introduced by chaos theory have made predicting ever further into the future impossibly difficult. Currently, the most experienced meteorologists using the most advanced modeling techniques are only able to proficiently predict weather conditions up to two weeks into the future. This time frame is frankly insufficient in our current era, where individuals and businesses often make plans months or years into the future. For this reason, we must develop alternative techniques to predict weather conditions deep into the future.
          While you may not find the problem of predicting weather in distant cities very pressing, it’s important to remember that businesses often need to make future plans to meet these needs. To solve this, I’ve created a program that presents average weather data collected by the National Climate Data Center, a department of the National Oceanic and Atmospheric Administration (NOAA). This data was collected between the years 1981 to 2010 and includes average temperatures, highs, lows, daily precipitations totals, and much more from over 7,500 sites across the United States. To use the program, simply input a zip code and date, and the relevant average temperature, high, and low for that day will be presented. I’ve opted to present only this temperature data to keep the program more focused, however, additional weather data can also be presented. Commented out at the bottom of the script file are two such examples: one presenting average precipitation in inches, and the other showing 75th percentile precipitation values from the region.`
        },
        {
          by: 'Maria Lusardi',
          title: 'Implementing HTTPS on a RHEL Web Server',
          doc: '/mlusardi-unix.docx',
          year: 'Fall 2020',
          desc: `HTTPS (Hypertext Transfer Protocol Secure) is increasingly becoming the standard for webpages over HTTP (Hypertext Transfer Protocol). There are two parts to HTTPS which make it more secure than HTTP. First, HTTPS uses certificates when connecting client web browsers to web servers. This helps to verify that the server is the actual owner of that web domain, thus preventing attackers from inserting themselves between client and server communications in a man-in-the-middle attack. Second, HTTPS encrypts data sent between the client and the server, further preventing an attacker from accessing information in transit.

          Most web browsers today display some kind of indication, whether with a ‘lock’ icon or a green address bar, to indicate that a website is using HTTPS. Google also will prioritize HTTPS websites in search results. Implementing HTTPS used to be more difficult because certificates had to be generated by a trusted Certificate Authority, which costs money. However, in 2015, an organization called Let’s Encrypt began offering certificates for free, and with ACMEs (Automatic Certificate Management Environments) such as Certbot, certificates can be automatically generated and renewed, making the process even easier. In short, there is no reason to leave a website insecure with HTTP.
          
          My report demonstrates how to set up HTTPS on a RHEL 8 (Red Hat Enterprise Linux 8) server as an ec2 (Elastic Cloud Computing) instance on AWS. I walk through how to open port 443 for HTTPS on the AWS ec2 console, access the server via ssh in the command line, enable SSL (Secure Sockets Layer) encryption, and generate a self-signed certificate. I was unable to generate a certificate from Let’s Encrypt, as this requires the user to own a domain name for a website. However, I do show how to install and run Certbot, which verifies the domain name and automatically retrieves the certificate from Let’s Encrypt. Once this certificate is received, the website will display the ‘lock’ icon in the address bar, indicating that it is running a secure HTTPS connection.`

        },
        {
          by: 'Hannah Castelvecchi',
          desc: `The scope of this course includes techniques on file manipulation such as sorting data based on numerical fields, locating repeating lines, and replacing strings or characters. The capabilities of shell scripting in regards to large datasets expands to complex analysis of patterns and statistics on files and even outside sources like websites or articles.  This type of analysis can be applied to sources like CSV files that contain fields of data.  Lines in a file may be organized by a specific field’s alphabetical position, numerical value, using the “sort” command.  Furthermore, a file may be read by a shell script in a way in which more intuitive data is outputted.  For example, a file containing rows and columns of data may be reworked so that only the first field for each line is displayed using the “cut” command in a while-loop.  Similarly, values within specific fields may be stored within variables or temporary files so that a script may use a loop to print out desired pieces of data. 

          Applying these methods of analysis using shell scripting is effective in that, by comparison to languages such as C or C++, they are highly portable and readable.  Whereas a shell script may be transferred between different unix operating systems, a C/C++ program must be rebuilt and may not run as expected.  Additionally, shell scripting is easier to use when administrative tasks like redirecting the output, and the scripts can be more easily debugged since the user has access to the source code.  I applied these methods in two different example shell scripts that I built for my report. Overall, shell scripting is more transparent and therefore efficient when it comes to accessing large datasets and has a multitude of capabilities to analyze them.`,
          year: 'Fall 2020',
          title: 'Large Datasets in Shell Scripting',
          doc: 'hcastelvecchi-unix.pdf',
          vid: 'https://www.youtube.com/embed/j1XTyAg5fr4'
        },
        {
          by: 'Mason Adrales',
          desc: `Command Line Interfaces are now standard for most frameworks or technologies in order to streamline the process of installing and exhibiting the features of the application. In this report, I will cover the basic definition of a CLI along with the basic history of the use of CLI in software development. Then, I will use examples such as Angular, PHP, and Git to demonstrate how beneficial a CLI can be. Lastly, I will display applications of my research on my local machine to demonstrate how each CLI can be accessed and show some of the basic commands for the mentioned frameworks.
          To begin with the history of CLI’s and their basic usage, it is important to examine what a command-line interface is. Margaret Rouse of SearchWindowsServer defines a CLI as a, “text-based user interface used to view and manage computer files”. This can be summarized in a more simplistic definition stating that a CLI allows users to interact with the programs installed on their machines to access features, generate new items, or to stop processes on the system (among other features). In my research, I decided to explain and demonstrate how the basic CLI of a new UNIX system works. I talked about how basic commands such as chmod, cd, ls, and vi are useful in the UNIX environment as well as how they can be used for Software Development.
          Lastly, I discussed other CLIs that are useful in Software Development. I started with Angular and its CLI as this is a super popular JavaScript framework that makes working in development immensely easier. The Angular CLI can be used to serve applications, generate components, and deploy the results. PHP also has it’s own CLI interface as you can compile php files and debug issues that you have in your code. Git’s CLI (that is included in UNIX and MacOS systems by default) allows the developer to collaborate with others while utilizing a repository-hosting website such as GitHub to track versions and share results with others. Overall, I think this assignment was beneficial as I was able to learn more about the uses of CLIs in different situations while also solidifying the basics.`,
          year: 'Fall 2020',
          title: 'Command Line Interfaces in Software Engineering',
          doc: 'madrales-unix.docx',
          vid: 'https://youtube.com/embed/c7Z5OLcNw0s'
        }
      ]
    }
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseName = params['name'];
      if(!this.course()) {
        this.router.navigateByUrl('/');
      }
      else {
        this.courseIndex = this.courseNames.findIndex(name => name === this.courseName);
      }
    });
  }
  course() {
    return this.courseInfo[this.courseName];
  }
  nextCourse() {
    if (this.courseIndex !== this.courseNames.length - 1) this.courseIndex++;
    else this.courseIndex = 0;
    this.courseName = this.courseNames[this.courseIndex];
    this.location.go('/courses/' + this.courseName);
  }
  prevCourse() {
    if (this.courseIndex !== 0) this.courseIndex--;
    else this.courseIndex = this.courseNames.length - 1;
    this.courseName = this.courseNames[this.courseIndex];
    this.location.go('/courses/' + this.courseName);
  }
  url(str: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(str);
  }

}
