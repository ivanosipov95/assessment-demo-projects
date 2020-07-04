import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Entity, EntityType} from "../../../entities/models";
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";
import {getEntities} from "../../../entities/containers";

const getBookById = gql`
    query getBookById($id: ID!) {
        book(id: $id) {
            id
            name
        }
    }
`

const getAuthorById = gql`
    query getAuthorById($id: ID!) {
        author(id: $id) {
            id
            name
        }
    }
`

const getShopById = gql`
    query getShopById($id: ID!) {
        shop(id: $id) {
            id
            name
        }
    }
`

const updateBookName = gql`
    mutation updateBookName($id: ID!, $name: String) {
        book(id: $id, name: $name) {
            id
            name
        }
    }
`


@Component({
  selector: 'entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityDetailComponent implements OnInit {
  entity: Entity;

  private queryStrategies = {
    Book: getBookById,
    Author: getAuthorById,
    Shop: getShopById
  }

  constructor(private activatedRoute: ActivatedRoute, private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo.query<any>({
      query: this.queryStrategies[this.activatedRoute.snapshot.fragment],
      variables: {id: this.activatedRoute.snapshot.params.id}
    })
      .pipe(
        map((resp) => resp.data[this.activatedRoute.snapshot.fragment.toLocaleLowerCase()]),
      ).subscribe((entity) => this.entity = entity);
  }

  handleUpdate(): void {
    this.apollo.mutate({
      mutation: updateBookName,
      variables: {
        id: this.activatedRoute.snapshot.params.id,
        name: this.entity.name
      },
      refetchQueries: [
        {
          query: getEntities,
          variables: {
            text: '',
            type: EntityType.BOOK
          }
        }
      ]
    }).subscribe()
  }

}
