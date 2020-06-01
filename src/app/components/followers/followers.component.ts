import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  constructor(private http: HttpClient) { }

  followers;
  url = 'https://api.github.com/users/mosh-hamedani/followers';

  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe(
        (res: any[]) => {
          this.followers = res;
          console.log(this.followers)
        }
      );
  }

}
