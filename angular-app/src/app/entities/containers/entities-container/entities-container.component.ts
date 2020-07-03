import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Entity, SearchParams} from '../../models';
import gql from 'graphql-tag';
import {AppStore} from '../../../app-store';

export const getBooks = gql`
    query {
        books {
            id
            name
        }
    }
`;

const getSearchParams = gql`
    query {
        searchParams {
            text
            type
        }
    }
`;

const updateSearchParams = gql`
    mutation updateSearchParams ($text: String, $type: String)  {
        updateSearchParams(text: $text, type: $type) @client
    }
`;


@Component({
  selector: 'entities-container',
  templateUrl: './entities-container.component.html',
  styleUrls: ['./entities-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntitiesContainerComponent implements OnInit {
  searchParams$ = this.appStore.watchQuery({query: getSearchParams});
  entities$ = this.apollo.watchQuery<any>({query: getBooks}).valueChanges;

  constructor(private apollo: Apollo, private appStore: AppStore) {
  }

  ngOnInit(): void {
  }


  handleSearchChange(searchParams: SearchParams): void {
    console.log(searchParams);

    this.apollo.mutate({
      mutation: updateSearchParams,
      variables: {...searchParams},
      refetchQueries: [{query: getSearchParams}]
    }).subscribe((t) => console.log('mutatuin', t))

    // this.appStore.writeData({searchParams});
    // this.apollo.query<any>({
    //   query: getBooks,
    // }).subscribe(data => {
    //   this.entities = data.data.books;
    // });
  }

  handleOpening(entity: Entity): void {
    console.log(entity);
  }
}
