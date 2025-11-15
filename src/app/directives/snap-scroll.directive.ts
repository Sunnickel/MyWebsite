import { Directive, HostListener } from '@angular/core';

@Directive({
	selector: '[appSnapScroll]',
	standalone: true
})
export class SnapScrollDirective {
	private get anchors(): HTMLElement[] {
		return Array.from(
			document.querySelectorAll('section[id], div[id], [data-snap]')
		) as HTMLElement[];
	}

	private currentIndex(): number {
		const y = window.scrollY;
		const tops = this.anchors.map(el => el.offsetTop);
		let idx = tops.findIndex(t => t > y);
		return idx === -1 ? tops.length - 1 : Math.max(0, idx - 1);
	}

	@HostListener('wheel', ['$event'])
	onWheel(e: WheelEvent) {
		if (!e.deltaY) return;          // ignore pure horizontal
		e.preventDefault();             // stop normal scroll

		const idx  = this.currentIndex();
		const next = e.deltaY > 0
			? Math.min(idx + 1, this.anchors.length - 1)
			: Math.max(idx - 1, 0);

		this.anchors[next]?.scrollIntoView({ behavior: 'smooth' });
	}
}
