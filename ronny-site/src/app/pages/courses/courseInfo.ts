// info from courses is supplied in this JSON

export let courseInfo = {
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
      image: '/bazanr/assets/netsec.jpg',
      quotes: [
          'The content of this class is amazing and professor is extremely well versed in the subject.',
          'Loved this course. Both Ronny and the TA were both very accessible via email or Zoom.',
          'Great professor!'
      ]
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
      image: '/bazanr/assets/advcybersec.jpg',
      quotes: [
          "I love this course! It is probably one of the best classes I've taken here at Mizzou. I loved what we learned. It was interesting and I enjoyed the fact that every week we would learn about a topic then had the opportunity to test it out ourselves through the lab. The instructor was very responsive, the module videos were clear, and the assignments were never too confusing.",
          "It appears to me that a lot of this course content is applicable to real world scenarios and stuff employers like to see from potential hires.",
          "The assignemnts were intersting, and a good middle ground on difficulty.",
          "Explained well, instructor responds to questions quickly, interesting labs!",
          "It was nice to see the other side of Cyber Security (Red Team) because it helps you understand what attackers use and need, so you can be better prepared to help defend against it if needed.",
          "I enjoyed the fact that everything we learned about had real world applications. It was not just theory; we were able to learn how hackers penetrate systems so that we are better prepared to protect those systems in the future.",
          "Having access to the router, smart router, and virtual machines made learning much more engaging. Lectures and supplemental resources were always made available through Canvas.",
          "I enjoyed the type of assignments we got to do. We got to do some really neat challenges to learn about security in the real world. It definitely helped my knowledge of Linux grow, which I value greatly.",
          "The professor was very knowledgable about cybersecurity and some of the tools we used were amazing."
      ],
      projects: [
          {
            by: 'Andy Schuster',
            title: 'Social-Engineering Toolkit',
            doc: '/bazanr/assets/aschuster-advsec.docx',
            year: 'Fall 2020',
            desc: "The Social-Engineer Toolkit (SET) is an open-source penetration testing framework designed for social engineering. SET has a number of custom attack vectors that allow you to make a believable attack in a fraction of time. These kinds of tools use human behaviors to trick them to the attack vectors. SET can be accessed in the Kali Linux terminal by default and is a menu-based layout (no GUI). It can also be installed on Mac OS as well as other Linux systems. The toolkit has pre-installed attacks. Some of these attacks include sending mass phishing emails, QRCode Generator Attack Vector, Infectious Media Generator, even some third-party user made attacks and so many more. The attacks built into the toolkit are designed to be targeted and focused attacks against a person or organization used during a penetration test. For a pocket-sized social engineering toolkit, users have flashed Kali Linux OS to their raspberry Pi. As stated above, SET is preinstalled on Kali linux so flashing the OS onto the raspberry pi gives their pi all of the tools necessary to have a small, yet full capable, hacking device."
          },
          {
            by: 'Steven Vaughan',
            title: 'The Vulnerabilities of Windows 10',
            doc: '/bazanr/assets/svaughan-advsec.pdf',
            year: 'Fall 2020',
            desc: "Microsoft Windows 10 is one of the most widely used operating systems in the world. According to Microsoft there are over one billion monthly users of Windows 10 as of March 2020 (Microsoft Asia News Center, 2020). While this is an incredible number of users, one thing that a lot of new and existing users of Windows 10 do not consider is the current active vulnerabilities that plague the operating system. These vulnerabilities range from relatively harmless, to allowing access to your personal information, to even allowing attackers to modify files and applications on your computer. Of course, vulnerabilities like these are not at all exclusive to the Windows 10 operating system, however with over one billion monthly users of Windows 10 it is good to know what vulnerabilities may be active and how to protect yourself from them. "
          },
          {
            by: 'Andrew Murphy',
            title: 'Cross-Site Scripting',
            doc: '/bazanr/assets/amurphy-advsec.pdf',
            year: 'Fall 2020',
            desc: "XSS is a vulnerability that can allow attackers to inject code into a different user’s page. This can be used to gain access to the system by using the same-origin policy. Injected javascript can be very dangerous as it can access a user’s cookies, send any amount of http requests, modify what the user sees, and modify values in scripts with the same scope. Common attacks include cookie theft, keylogging, and phishing attacks. he best way to prevent XSS attacks is to filter all input, sometimes called sanitizing input. This process gives escape characters to any potentially malicious characters or deletesthem entirely. It is also important to sanitize any server output before it is displayed so it is not interpreted as executable code."
          },
          {
            by: 'Andrew Brown',
            title: 'SQL Injections using the Damn Vulnerable Web Application',
            doc: '/bazanr/assets/abrown-advsec.pdf',
            year: 'Fall 2020',
            desc: 'SQL Injection attacks continue to be relevant in today’s today cybersecurity field. Freepik, a website used for sharing images and other media was victim of a SQL injection attack in August 2020, where over 8.3 million accounts had both their emails and password hashes stolen. In response to the attack, Freepik had reset the account information for 229K user accounts. This attack demonstrates how SQL Injections are still a relevant threat and learning how to protect your system against them is essential to keeping your user’s information safe. We will be covering SQL injections using the Damn Vulnerable Web Application or DVWA for short. DVWA is a PHP/MySQL application that was created for web developers and security professionals to test their skills and help learn how to secure their application. As implied by its name, DVWA comes with a plethora of vulnerabilities including a susceptibility to SQL injections. Knowledge of MySQL, Docker Containers, and PHP will prove useful in understanding this material.'
          },
          {
            by: 'Hunter McVey',
            title: 'Meltdown and Spectre Attack Implementation',
            doc: '/bazanr/assets/hmcvey-advsec.docx',
            year: 'Fall 2020',
            desc: "This paper will go into detail what a Meltdown and Spectre attack are, and how to implement the Spectre attack. The setup necessary for this will also be documented within. These attacks surfaced in 2018 and were major causes for advancement in processor security. The Meltdown and Spectre attacks are great examples of how the physical aspects of the machine can lead a system to be vulnerable as well. This vulnerability was discovered to be applicable to all intel x86 microprocessors and IBM Power processors. Thus, most people were vulnerable due to just having a specific component within their systems."
          },
          {
            by: 'Jack Vickers',
            title: 'Introduction to SQLmaps and SQL Injections',
            doc: '/bazanr/assets/jvickers-advsec.pdf',
            year: 'Fall 2020',
            desc: "SQLmap is “an open source penetration tool that automates the process of detecting and exploiting SQL injection flaws”. SQLmap will automatically go through the URL provided to it through commands, detect the backend database management system, and test system-specific injection types against it. After a flaw is found, the user can use SQLmap to enumerate the server and execute whatever commands they prefer. SQLmap even is compatible with Metasploit and can be used to process user privilege escalation via meterpreter’s ‘getsystem’ command. I believe that SQL and more specifically SQL injections are an important part of cybersecurity, and can often be the first point of access. When an injection is abused to its fullest, it can allow the attacker to retrieve passwords of users, cause a DoS attack in the vein of deleting data, add users to the database, and much more. In addition, web applications are a very public, forward facing representation of a company or individual and therefore will be having the highest amount of traffic running through these areas. This makes it easy for attackers to look for holes and exploits to abuse to gain further access. In a study conducted by Ponemon in 2014, they found that 65% of companies reported an SQL injection attack in the past 12 months. Furthermore, when Ponemon asked companies if they believed their security departments had the skills and knowledge to detect or prevent these attacks, only about 30% agreed with confidence. Although this study is almost 7 years old, I still believe that learning about these types of attacks is crucial to the wide range of knowledge a security professional must know thoroughly."
          },
          {
            by: 'Yukun Zhang',
            title: 'Keylogging with Metasploit',
            doc: '/bazanr/assets/yzhang-advsec.pdf',
            year: 'Fall 2020',
            desc: "A keylogger is a program that records every keystroke made by a user, generally in secret. The keystrokes are recorded as data and can be retrieved by an attacker at a later time. Keyloggers have various uses, such as the example stated above, but are typically known for their malicious use in gaining fraudulent to otherwise confidential information. Due to the nature of keyloggers, they have been mainly used for espionage. An early known use of a keylogger is dated in the 1970s by the Soviet Union. Keylogger programs were installed on IBM typewriters by spies in the US embassy and consulate buildings in Moscow (Crypto Museum, 2015). Keylogger programs have to be running on the machine in order to record keystrokes, a common use is to retrieve confidential and important information such as passwords, credit card information, or social security numbers. A keylogger program is installed onto a user's programas a trojan; A trojan program is a type of malware that misleads the user of its true intentions (Christensson, 2006). The keylogger precedes to record the user's keystrokes and sends the Keylogging with Metasploit information back to the attacker. The attacker now has access to potential passwords and other information such as credit card numbers and social security numbers. Another use is in law enforcement, warrants can be obtained to install keyloggers for surveillance. In 1999, the FBI broke into and installed a keylogger program on Nicodemo Scarfo, Jr to obtain information toc onvict him."
          }
      ]
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
         'SSL-TLS',
         'SFTP',
         'SAMBA',
         'Database Administration',
         'SSH and OpenSSH',
         'Microsoft Windows Server',
         'Microsoft Active Directory Services Configuration, Administration, and Monitoring'
       ],
       hours: 3,
       prereq: 'INFOTC 2040 or CMP_SC 2050, junior standing, or Instructor Consent.',
       mode: 'E-Learning 100% Online',
      image: '/bazanr/assets/sysadmin.jpg',
      quotes: [
          "I like that the lecture videos were concise but very informative. I also liked having a discussion board for every assignment.",
          "Course is very informative. I loved the way the class is taught, and the real world applications of the content.",
          "The weekly labs coupled with the lectures really helped me learn the subject.",
          "The videos were well organized and clear.",
          "I enjoyed and appreciate how the videos were all on YouTube. This made it easy to watch them over and over again. As well as, the videos were insightful and helped walk me through the steps on what to do for the labs.",
          "Great course. Quick and effective grading/feedback. I think this course should be a required IT course.",
          "The online videos were very helpful. It was nice to be able to scroll through the videos, or rewind to go back and check my work.",
          "Really enjoyed the course and the content was useful.",
          "All content was useful and very helpful in navigating the course.",
          "The online course was planned well and the videos were extremely helpful with the completion of labs and homework assignments.",
          "This course was exactly what I needed to refresh many of the topics I've covered in other courses over the years. The labs were fair and felt like they actually had a purpose for truly furthering my understanding of the various topics we covered. The field trip to Kansas City data centers was especially great as I got to see how nice the professor and my classmates are in person, but also got to see some real world people doing the jobs I might be doing for the rest of my career. The professor and TA were also extremely helpful and quick to respond. I really enjoyed this class!"
      ]
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
      image: '/bazanr/assets/forensics.jpg',
      quotes: [
          "The instructor did a wonderful job planning this course and used effective teaching strategies that were specific to the subject material. In class we learned by doing, which in my mind is the most effective way to learn IT. This course was challenging in all the right ways and I learned a lot. This is the only class I have *ever* taken where I will be opting to save the provided material to reference later in my professional life.",
          "Love this course! The TA was very helpful and Ronny was always engaged."
      ]
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
          text:  "Explain basic computer networking concepts applied to Unix-like systems.",
          icon: 'globe',
          color: 'tertiary'
        },
        {
          text:  "Correctly configure different services for Unix-like OS.",
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
      image: '/bazanr/assets/unix.jpg',
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
          doc: '/bazanr/assets/jnguyen-unix.pdf',
          year: 'Fall 2020'
        },
        {
          by: 'Andy Schuster',
          title: 'Raspberry Pi, just not the Pie Kind',
          year: 'Fall 2020',
          desc: `Do you despise ads and are interested in learning about Raspberry Pi (not the pie kind)? A Raspberry Pi is a low-cost credit-card sized computer that is capable of many things. The Raspberry Pi default OS is Raspbian, a Debian-based OS and a form of Linux distribution, so the commands we have used throughout the semester will come in handy. If you want build a smart mirror that includes voice commands, the Pi can do that. If you want to create a retro gaming console to reminisce childhood memories, the Pi is also capable of doing that too. 
          A networking tool that blocks most ads and is fairly easy to install on a Raspberry Pi is Pi-Hole. Pi-Hole works as a DNS server that uses a list of known list of domain names from advertising, tracking, and analytics services to block ads on your network. As a DNS server, this allows the Pi-hole to intercept any outgoing or incoming DNS requests and can block or pass certain domains from accessing your device, keeping your computer and other devices safe from ads. 
          I walk through the basics. This includes flashing the OS to the sim card to teaching how to set up SSH on the Pi to connect remotely. Lastly, I walk through how to install the network-wide ad blocker, Pi-Hole, on a Pi and how to connect to it either network wide or to individual devices. Once installed, enjoy ad-free apps to ad-free websites. `,
          doc: '/bazanr/assets/aschuster-unix.docx'
        },
        {
          by: 'Brian Jiang',
          title: 'Security Issues with UNIX-Like Systems',
          year: "Fall 2020",
          doc: '/bazanr/assets/bjiang-unix.docx',
          vid: 'https://www.youtube.com/embed/ufM40h5IUSk',
          desc: `Operating system security has had lots of issues because users on the computer debug and program the code that causes vulnerabilities. Security in an operating system will protect the system being controlled on the computer. The confidentiality, availability and integrity triad issues occur from confidential data being stolen along with data being modified or deleted by hackers. UNIX/Linux is the most secure operating system but still have issues.

          UNIX/Linux is a very popular operating system because the source code is available to the public and that linux can be modified unintentionally or on purpose. Commands and tools can be used to hack the operating systems to gain unauthorized access. As a result of that, vulnerabilities may occur in the computer systems from vulnerability scanning, network scanning along with password cracking.
          
          The types of attacks in UNIX/Linux security are physical, social engineering and dumpster diving. Physical security attacks are where the hackers modify the files that are the most critical, and that physical security is important for keeping the operating system secure. Social engineering attacks are where the users are tricked by running a program that they thought is risk free and it’s important to keep your devices secure and watch out on what emails you’re getting. Dumpster diving attacks occur when password lists are shown without shredding and that information is found while attacking a network. Security issues can be solved by having the abilities on the security status of each computer system and that the users can catch any hackers that wrongfully use the system.`,

        },
        {
          by: 'Malek Necibi',
          title: 'Predicting Daily Local Weather Information using Recorded Historical Climate Data from NOAA’s NCDC',
          doc: '/bazanr/assets/mnecibi-unix.docx',
          script: '/bazanr/assets/predictWeather.sh',
          vid: "https://www.youtube.com/embed/MmGoBgXbnCk",
          year: 'Fall 2020',
          desc: `Meteorology, or the study of atmospheric phenomena such as weather and climate, has advanced tremendously over the past several decades. New prediction techniques have pushed the limits of weather forecasting from merely a few hours to several days into the future. Even so, hurdles introduced by chaos theory have made predicting ever further into the future impossibly difficult. Currently, the most experienced meteorologists using the most advanced modeling techniques are only able to proficiently predict weather conditions up to two weeks into the future. This time frame is frankly insufficient in our current era, where individuals and businesses often make plans months or years into the future. For this reason, we must develop alternative techniques to predict weather conditions deep into the future.
          While you may not find the problem of predicting weather in distant cities very pressing, it’s important to remember that businesses often need to make future plans to meet these needs. To solve this, I’ve created a program that presents average weather data collected by the National Climate Data Center, a department of the National Oceanic and Atmospheric Administration (NOAA). This data was collected between the years 1981 to 2010 and includes average temperatures, highs, lows, daily precipitations totals, and much more from over 7,500 sites across the United States. To use the program, simply input a zip code and date, and the relevant average temperature, high, and low for that day will be presented. I’ve opted to present only this temperature data to keep the program more focused, however, additional weather data can also be presented. Commented out at the bottom of the script file are two such examples: one presenting average precipitation in inches, and the other showing 75th percentile precipitation values from the region.`
        },
        {
          by: 'Maria Lusardi',
          title: 'Implementing HTTPS on a RHEL Web Server',
          doc: '/bazanr/assets/mlusardi-unix.docx',
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
          doc: '/bazanr/assets/hcastelvecchi-unix.pdf',
          vid: 'https://www.youtube.com/embed/j1XTyAg5fr4'
        },
        {
          by: 'Mason Adrales',
          desc: `Command Line Interfaces are now standard for most frameworks or technologies in order to streamline the process of installing and exhibiting the features of the application. In this report, I will cover the basic definition of a CLI along with the basic history of the use of CLI in software development. Then, I will use examples such as Angular, PHP, and Git to demonstrate how beneficial a CLI can be. Lastly, I will display applications of my research on my local machine to demonstrate how each CLI can be accessed and show some of the basic commands for the mentioned frameworks.
          To begin with the history of CLI’s and their basic usage, it is important to examine what a command-line interface is. Margaret Rouse of SearchWindowsServer defines a CLI as a, “text-based user interface used to view and manage computer files”. This can be summarized in a more simplistic definition stating that a CLI allows users to interact with the programs installed on their machines to access features, generate new items, or to stop processes on the system (among other features). In my research, I decided to explain and demonstrate how the basic CLI of a new UNIX system works. I talked about how basic commands such as chmod, cd, ls, and vi are useful in the UNIX environment as well as how they can be used for Software Development.
          Lastly, I discussed other CLIs that are useful in Software Development. I started with Angular and its CLI as this is a super popular JavaScript framework that makes working in development immensely easier. The Angular CLI can be used to serve applications, generate components, and deploy the results. PHP also has it’s own CLI interface as you can compile php files and debug issues that you have in your code. Git’s CLI (that is included in UNIX and MacOS systems by default) allows the developer to collaborate with others while utilizing a repository-hosting website such as GitHub to track versions and share results with others. Overall, I think this assignment was beneficial as I was able to learn more about the uses of CLIs in different situations while also solidifying the basics.`,
          year: 'Fall 2020',
          title: 'Command Line Interfaces in Software Engineering',
          doc: '/bazanr/assets/madrales-unix.docx',
          vid: 'https://youtube.com/embed/c7Z5OLcNw0s'
        }
      ]
    },
    "undergrad_research": {
        title: 'INFOTC 4990: Undergraduate Research (Individual Study)',
        description: 'This course focuses on the use of state-of-the-art technology that is applicable to cybersecurity. As a student, you can choose between different research projects focused on cybersecurity, or bring your own research project ideas or interests. Some examples are cloud security, cyberinfrastructure, network performance measurement and monitoring, Software Defined Networking, Active Directory security, Wireless security, Cyber Defense systems, and Training Boxes for Cybersecurity. Please contact Ronny Bazan Antequera (bazanantequerar@umsystem.edu) to request a permission number to enroll in the course.',
        hours: "1-6",
        prereq: "Instructor Consent",
        image: '/bazanr/assets/research-class.jpg',
        objectives: [
            {
              text: "Apply the knowledge you obtained in different courses to solve real-life cybersecurity problems.",
              icon: 'bulb',
              color: 'dark'
            },
            {
                text: 'Conduct your own research under the supervision of the course instructor.',
                icon: 'flask',
                color: 'tertiary'
            }
        ],
        topics: [
            "Course topics are defined by the student's semester project."
        ],
        mode: 'In-Person OR E-Learning 100% Online',
        quotes: [
            'Ronny is an amazing professor that allowed me to conduct my own research at my own pace. Ronny was quick to respond to emails regarding scheduling for our meetings and was very understanding.'
        ],
        projects: [
            {
                by: 'Patrick Kunza',
                year: 'Spring 2020',
                title: 'Software Defined Radio (SDR)',
                desc: 'During this semester, I research wireless hacking capabilities within Software Defined Radio (SDR). Software Defined Radio (SDR) is a type of radio in which all of the physical layer functions are software defined. This definition was obtained from the collaboration from the Institution of Electrical and Electronics Engineers (IEEE) and Wireless Innovation Forum. In other words, SDR is a type of radio communication system that consists of the traditional components implemented in hardware such as filters, amplifiers, and mixers are implemented as software on an embedded system such as a computer, Hackrf One, RTL SDR or other SDR enabled devices.',
                doc: '/bazanr/assets/pkunza-research.pdf'
            },
            {
                by: 'Steven Coll, Andy Schuster, Nadia Guidry, Michael Schmitt',
                year: 'Fall 2020',
                title: 'Capture the Flag Training Box',
                desc: 'The Capture the Flag (CTF) Training Box is a cybersecurity learning environment made with Docker containers deployed on Amazon Web Services (AWS). Docker containers are units of software that contain light-weight, virtual images of operating systems. We created the CTF learning environment with a perfect difficulty increase as users pass through the training levels. We focused on red team (offensive security) exercises for this virtual environment. These types of skills are crucial for testing your own network to find any vulnerabilities and to patch them before someone else finds them. The final product can be found in https://hackingwith.me/',
                doc: '/bazanr/assets/ctfbox-research.pdf',
                vid: 'https://www.youtube.com/embed/jxbBn15lf-c'
            },
            {
                by: 'Brian Mattingly',
                year: 'Fall 2020',
                title: 'Wireless Security',
                desc: 'We all have routers installed in our homes that allow us to get access to the Internet. During this semester I research common vulnerabilities in different routers as well as the benefits and drawbacks of using Linux based alternative OpenSource firmware for routers such as DD-WRT. I tested the security of the routers by using different exploits and methods to break down the security of those devices.',
                vid: 'https://www.youtube.com/embed/9GSVENNh478'
            }
        ]


    }
  };