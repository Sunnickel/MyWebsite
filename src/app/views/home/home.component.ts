import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HugeiconsIconComponent} from '@hugeicons/angular';
import {
	ArrowDown01Icon,
	CrabIcon,
	Database02Icon,
	GithubIcon,
	JavaIcon,
	JavaScriptIcon,
	Mail01Icon,
	PythonIcon,
	TwitchIcon,
	VisualStudioCodeIcon
} from '@hugeicons/core-free-icons';
import {SnapScrollDirective} from '../../directives/snap-scroll.directive';

@Component({
	selector: 'app-home',
	imports: [RouterLink, HugeiconsIconComponent, SnapScrollDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {
	protected readonly ArrowDown01Icon = ArrowDown01Icon;
	protected readonly GithubIcon = GithubIcon;
	protected readonly TwitchIcon = TwitchIcon;
	protected readonly Mail01Icon = Mail01Icon;
	protected readonly JavaScriptIcon = JavaScriptIcon;
	protected readonly JavaIcon = JavaIcon;
	protected readonly PythonIcon = PythonIcon;
	protected readonly CrabIcon = CrabIcon;
	protected readonly Database02Icon = Database02Icon;
	protected readonly VisualStudioCodeIcon = VisualStudioCodeIcon;

	projects: Project[] = [
		new Project(0, "QEM Rust", "An implementation of QEM (Quadric Error Metric) in Rust.", "🚀", ["rust", "research", "3D"]),
		new Project(1, "SunWeb", "A small web server for http and https made with Rust. Flexible for many uses.", "🚀", ["rust", "webserver", "http"]),
		new Project(2, "DigitalClock-ESP32", " digital clock built with a ESP32", "🚀", ["c++", "esp32"]),
		new Project(3, "LoginAPI", "A Java API for Users", "🚀", ["java", "api", "mysql"]),
		new Project(4, "Card-Games", " Card Games written for the CLI", "🚀", ["python"])
		]

}

class Project {
	id: number;
	name: string;
	description: string;
	image: string;
	tags: string[];

	constructor(id: number, name: string, description: string, image: string, tags: string[]) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.image = image;
		this.tags = tags;
	}
}
