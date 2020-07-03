import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Entity} from '../../models';

@Component({
  selector: 'entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityCardComponent {

  @Input() entity: Entity;
  @Output() onOpen = new EventEmitter<Entity>();

  handleOpening(): void {
    this.onOpen.emit(this.entity);
  }

}
