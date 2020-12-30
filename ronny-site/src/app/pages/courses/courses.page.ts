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
      title: "IT 3810: Computer Network Security",
      description: `This course covers principles of networking configuration and security authentication, IP security, network management security, wireless security,
       and system security by studying attacks on computer systems, network, and the Web as well as detection and prevention. 
       
       Work is completed in Unix/Linux environments and in Microsoft Windows environment. Students will need to setup a virtual private infrastructure to perform multiple tasks; additionally unlimited AWS cloud resources 
       will be available for them. The course emphasizes "learning by doing" and has a 90% hands on and 10% theory approach. Much of this information consists of skills 
       and abilities that employers want and expect in the real world of IT in a small to medium size organization.`,
      objectives: [
        {
          text: "Compare and configure routing protocols",
          icon: 'git-compare',
          color: 'primary'
        },
        {
          text:  "Determine the benefits of isolated network connections",
          icon: 'eye-off',
          color: 'danger'
        },
        {
          text: "Protect computer systems and networks from unauthorized access",
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
      prereq: "INFOTC 2810",
      image: '../../../assets/netsec.jpg'
    },
    "adv_cyber_security": {
      title: "IT 3910: Advanced Cyber Security",
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
      image: '../../../assets/advcybersec.jpg'
    },
    "system_administration": {
      image: '../../../assets/sysadmin.jpg'
    },
    "digital_forensics": {
      title: "CS/IT 4910: Digital Forensics",
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
      image: '../../../assets/forensics.jpg'
    },
    "unix_os": {
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
