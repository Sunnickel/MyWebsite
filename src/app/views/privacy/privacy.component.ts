import {
    Component
} from '@angular/core';
import {
    RouterLink
} from '@angular/router';
import {
    NgIcon,
    provideIcons
} from '@ng-icons/core';
import {
    phosphorDatabase,
    phosphorFileCSharp,
    phosphorGithubLogo,
    phosphorMailbox,
    phosphorTwitchLogo
} from '@ng-icons/phosphor-icons/regular';
import {
    hugeJava,
    hugeJavaScript
} from '@ng-icons/huge-icons';
import {
    simplePython,
    simpleRust
} from '@ng-icons/simple-icons';

@Component({
    selector: 'app-privacy',
    imports: [RouterLink],
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.css'],
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
export class PrivacyComponent {}
