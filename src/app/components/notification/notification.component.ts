import { Component,Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  @Input() menssage: string='';
  @Input() type: 'success' | 'error' = 'success' ;
  visible: boolean = false;

  ngOnInit(): void {
      this.show()
  }
  show(){
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
      }, 3000);
  }
}
