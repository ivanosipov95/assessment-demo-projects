import {Apollo} from "apollo-angular";
import {ApolloClient, ApolloQueryResult} from "apollo-client";
import {EntityType} from "./entities/models";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {FetchResult} from "apollo-link";

@Injectable({providedIn: 'root'})
export class AppStore {

  private client: ApolloClient<any>;

  constructor(private apollo: Apollo) {
    this.client = apollo.getClient();
    this.initAppState();
  }

  public readQuery({query, variables}: { query: any; variables?: any }): any {
    return this.client.readQuery({query, variables});
  }

  public watchQuery({query, variables}: { query: any; variables?: any }): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({query, variables}).valueChanges;
  }

  public writeData(data: any): void {
    this.client.writeData({data});
  }

  public mutate({mutation, variables, refetchQueries}): Promise<FetchResult<any>> {
    return this.client.mutate( {mutation, variables, refetchQueries });
  }

  private initAppState(): void {
    this.client.writeData({data: {searchParams: {text: '1', type: EntityType.BOOK}}});
  }
}
