import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  hello$ = this.apollo.watchQuery({
      query: gql`
          {
              hello
          }
      `,
  })
  .valueChanges;

  constructor(private apollo: Apollo) {

  }

}
