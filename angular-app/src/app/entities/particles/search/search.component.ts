import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {EntityType, SearchParams} from '../../models';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchComponent {
  entityType = EntityType;
  // text = '';
  // type = this.entityType.ALL;

  @Input() searchParams: SearchParams;

  // @Input() set searchParams(searchParams: SearchParams) {
  //   if (!searchParams) { return; }
  //
  //   debugger
  //
  //   this.text = searchParams.text;
  //   this.type = searchParams.type;
  // }

  @Output() onChange = new EventEmitter<SearchParams>();

  handleTextChange(text: string): void {
    this.onChange.emit({...this.searchParams, text});
  }

  handleTypeChange(type: EntityType, isChecked: boolean): void {
    this.onChange.emit({...this.searchParams, type: isChecked ? type : EntityType.ALL});
  }
}
