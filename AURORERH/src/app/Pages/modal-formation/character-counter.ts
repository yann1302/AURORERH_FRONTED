import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'textarea[appCharacterCounter]'
})
export class CharacterCounterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input') onInput() {
    const textarea = this.el.nativeElement;
    const charCount = document.getElementById(`${textarea.id}-char-count`);

    if (charCount) {
      charCount.textContent = `${textarea.value.length}/${textarea.getAttribute('maxlength')}`;
    } else {
      const newCharCount = document.createElement('div');
      newCharCount.id = `${textarea.id}-char-count`;
      newCharCount.textContent = `${textarea.value.length}/${textarea.getAttribute('maxlength')}`;
      textarea.parentNode.insertBefore(newCharCount, textarea.nextSibling);
    }
  }
}
