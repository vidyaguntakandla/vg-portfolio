import { Component, OnInit, Input } from '@angular/core';
import { SharedUtilsService } from '../../utils/shared-utils.service';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss']
})
export class SocialMediaLinksComponent implements OnInit {
  @Input() horizontal = true;

  constructor(private sharedUtilsService: SharedUtilsService) {}

  ngOnInit() { }

  onPrintClick() {
    window.print();
  }

  onEmailClick(emailId) {
    this.sharedUtilsService.copyToClipBoard(emailId);
  }
}
