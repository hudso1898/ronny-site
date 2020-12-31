import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  courseName: string = "";

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
      description: `TODO`,
      objectives: [
        {
          text: "TODO",
          icon: 'git-compare',
          color: 'primary'
        },
        {
          text:  "TODO",
          icon: 'eye-off',
          color: 'danger'
        },
        {
          text: "TODO",
          icon: 'shield-checkmark',
          color: 'success'
        }
      ],
      hours: 3,
      prereq: "INFOTC 2810",
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
      image: '../../../assets/unix.jpg'
    }
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseName = params['name'];
      if(!this.course()) {
        this.router.navigateByUrl('/');
      }
    });
  }
  course() {
    return this.courseInfo[this.courseName];
  }

}
