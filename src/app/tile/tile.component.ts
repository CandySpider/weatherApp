import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBarComponent } from "../info-bar/info-bar.component";

@Component({
    selector: 'app-tile',
    standalone: true,
    templateUrl: './tile.component.html',
    styleUrl: './tile.component.css',
    imports: [CommonModule, InfoBarComponent]
})
export class TileComponent {
   title: string[] = ['title','title'];
}
