import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SnapScrollDirective} from '../../directives/snap-scroll.directive';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {
	phosphorDatabase,
	phosphorFileCSharp,
	phosphorGithubLogo,
	phosphorMailbox,
	phosphorTwitchLogo
} from '@ng-icons/phosphor-icons/regular';
import {hugeJava, hugeJavaScript} from '@ng-icons/huge-icons';
import {simplePython, simpleRust} from '@ng-icons/simple-icons';

@Component({
	selector: 'app-home',
	imports: [RouterLink, SnapScrollDirective, NgIcon],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	viewProviders: [
		provideIcons({
			phosphorGithubLogo,
			phosphorTwitchLogo,
			phosphorMailbox,
			hugeJavaScript,
			hugeJava,
			simplePython,
			simpleRust,
			phosphorFileCSharp,
			phosphorDatabase
		})
	]
})
export class HomeComponent {
}
