import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Entity, SearchParams} from '../../models';
import gql from 'graphql-tag';
import {AppStore} from '../../../app-store';
import {Observable, Subject} from "rxjs";
import {ApolloQueryResult} from "apollo-client";
import {map, switchMap, takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

export const getEntities = gql`
    query getEntities($text: String, $type: EntityType){
        entities(text: $text, type: $type) {
            id
            name
            __typename
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
export class EntitiesContainerComponent implements OnInit, OnDestroy {
  searchParams$: Observable<ApolloQueryResult<any>>;
  entities$: Observable<ApolloQueryResult<any>>;


  private destroy$ = new Subject();
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  constructor(private apollo: Apollo, private appStore: AppStore, private router: Router) {
  }

  ngOnInit(): void {
    this.searchParams$ = this.appStore.watchQuery({query: getSearchParams});

    this.entities$ = this.searchParams$.pipe(
      map(({data}) => data.searchParams),
      switchMap(({text, type}) => {
        return this.apollo.query<any>({
          query: getEntities,
          variables: {text, type}
        });
      }),
      takeUntil(this.destroy$)
    );
  }

  trackByFn(i: number, item: Entity): string {
    return `${item.__typename}-${item.id}`;
  }

  handleSearchChange(searchParams: SearchParams): void {
    this.apollo.mutate({
      mutation: updateSearchParams,
      variables: {...searchParams},
    }).subscribe();
  }

  handleOpening(entity: Entity): void {
    this.router.navigate(['entities', entity.id], {fragment: entity.__typename});
  }
}
