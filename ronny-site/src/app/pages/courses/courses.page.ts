import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

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
        "Compare and configure routing protocols",
        "Determine the benefits of isolated network connections",
        "Protect computer systems and networks from unauthorized access"
      ],
      hours: 3,
      prereq: "INFOTC 2810",
      image: '../../../assets/netsec.jpg'
    },
    "adv_cyber_security": {
      image: '../../../assets/advcybersec.jpg'
    },
    "system_administration": {
      image: '../../../assets/sysadmin.jpg'
    },
    "digital_forensics": {
      image: '../../../assets/forensics.jpg'
    },
    "unix_os": {
      image: '../../../assets/unix.jpg'
    }
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseName = params['name'];
    });
  }
  course() {
    return this.courseInfo[this.courseName];
  }

}
