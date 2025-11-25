import { Component, inject, ElementRef, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flow',
  imports: [AngularSvgIconModule, CommonModule],
  templateUrl: './flow.html',
  styleUrl: './flow.scss',
})
export class Flow implements AfterViewInit {
  hoveredElement: string | null = null;
  modalPosition = { x: 0, y: 0 };
  
  @ViewChild('flowSvg', { read: ElementRef }) svgElementRef!: ElementRef;
  private readonly elementRef = inject(ElementRef);
  private readonly cdr = inject(ChangeDetectorRef);

  ngAfterViewInit() {
    this.setupSvgHoverListeners();
  }

  private setupSvgHoverListeners(attempt = 0) {
    const maxAttempts = 10;
    const delay = 200 + (attempt * 100);
    
    setTimeout(() => {
      let svgElement = this.svgElementRef?.nativeElement?.querySelector('svg');
      
      if (!svgElement) {
        svgElement = this.svgElementRef?.nativeElement?.shadowRoot?.querySelector('svg');
      }
      
      if (!svgElement) {
        const svgIconElement = this.svgElementRef?.nativeElement;
        if (svgIconElement) {
          svgElement = svgIconElement.querySelector('svg') || 
                      svgIconElement.shadowRoot?.querySelector('svg');
        }
      }
      
      if (svgElement) {
        const circles = svgElement.querySelectorAll('circle.server-circle');
        
        if (circles.length > 0) {
          circles.forEach((circle: Element) => {
            const circleElement = circle as SVGCircleElement;
            const id = circleElement.getAttribute('id');
            
            circleElement.addEventListener('mouseenter', (event: MouseEvent) => {
              if (id && id.startsWith('server')) {
                this.onElementHover(id, event);
                this.cdr.detectChanges();
              }
            });
            
            circleElement.addEventListener('mouseleave', () => {
              this.onElementLeave();
              this.cdr.detectChanges();
            });
            
            circleElement.style.cursor = 'pointer';
            circleElement.style.transition = 'opacity 0.2s';
          });
        } else if (attempt < maxAttempts) {
          this.setupSvgHoverListeners(attempt + 1);
        }
      } else if (attempt < maxAttempts) {
        this.setupSvgHoverListeners(attempt + 1);
      }
    }, delay);
  }

  onElementHover(elementType: string, event: MouseEvent) {
    this.hoveredElement = elementType;
    
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    
    this.modalPosition = {
      x: event.clientX - rect.left + 10,
      y: event.clientY - rect.top - 50
    };
    
    const modalWidth = 256;
    if (this.modalPosition.x + modalWidth > rect.width) {
      this.modalPosition.x = event.clientX - rect.left - modalWidth - 10;
    }
    if (this.modalPosition.y < 0) {
      this.modalPosition.y = event.clientY - rect.top + 10;
    }
  }

  onElementLeave() {
    this.hoveredElement = null;
  }

}
