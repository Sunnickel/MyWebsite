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

	private queue: number[] = [];
	private isScrolling = false;

	@HostListener('wheel', ['$event'])
	onWheel(e: WheelEvent) {
		if (!e.deltaY) return;
		e.preventDefault();

		const idx = this.currentIndex();
		const next = e.deltaY > 0
			? Math.min(idx + 1, this.anchors.length - 1)
			: Math.max(idx - 1, 0);

		// Only add to the queue if it's different from the last queued target
		// and the queue has less than 2 items
		if (this.queue.length < 2 && this.queue[this.queue.length - 1] !== next) {
			this.queue.push(next);
		}

		if (!this.isScrolling) {
			this.processQueue();
		}
	}

	private processQueue() {
		if (this.queue.length === 0) return;

		const targetIdx = this.queue.shift()!;
		this.isScrolling = true;
		this.smoothScrollTo(this.anchors[targetIdx].offsetTop).then(() => {
			this.isScrolling = false;
			this.processQueue(); // process next in queue
		});
	}

	private smoothScrollTo(target: number): Promise<void> {
		return new Promise(resolve => {
			const start = window.scrollY;
			const distance = target - start;
			const duration = 400; // ms
			let startTime: number | null = null;

			const step = (timestamp: number) => {
				if (!startTime) startTime = timestamp;
				const progress = Math.min((timestamp - startTime) / duration, 1);
				const ease = 0.5 - 0.5 * Math.cos(Math.PI * progress); // easeInOut
				window.scrollTo(0, start + distance * ease);

				if (progress < 1) {
					requestAnimationFrame(step);
				} else {
					resolve();
				}
			};

			requestAnimationFrame(step);
		});
	}
}
