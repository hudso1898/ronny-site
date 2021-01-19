import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'; 
import { MobileService } from 'src/app/services/mobile.service';
import { DomSanitizer } from '@angular/platform-browser';
import {courseInfo} from './courseInfo';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, public mobileService: MobileService, private domSanitizer: DomSanitizer) { }

  courseName: string = "";

  courseIndex: number;
  courseNames = [
    'computer_network_security',
    'adv_cyber_security',
    'system_administration',
    'digital_forensics',
    'unix_os',
    'undergrad_research'
  ];

  courseInfo = courseInfo;

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
