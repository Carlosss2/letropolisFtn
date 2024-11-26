import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeminiService } from '../../service/gemini/gemini.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dialog-chat',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dialog-chat.component.html',
  styleUrl: './dialog-chat.component.scss'
})
export class DialogChatComponent {
  geminiService = inject(GeminiService);
  chatbotResponses : string[] = [];
  isChatOpen: boolean = true;

  async getAnswer() {
    const userInput = this.geminiService.form.get('userInput')?.value;
    if (userInput) {
      this.chatbotResponses.push(`Tú: ${userInput}`);
      const response = await this.geminiService.generate(userInput);
      let cleanResponse = response.replace(/\*/g, '');
      this.chatbotResponses.push(`Mr.Ayuditas: ${cleanResponse}`);
      this.geminiService.form.reset();
    }
  }

 
}
