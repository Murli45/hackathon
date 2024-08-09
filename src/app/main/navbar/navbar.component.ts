
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Accordion } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [Accordion],
    styles: [],
    encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

    items: any;
    @ViewChild('menubar', { static: true }) menubar: ElementRef;
    constructor(private router: Router, private loginService: LoginService) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Workspaces',
                icon: 'pi pi-fw pi-home',
                align: 'left',
                items: [ // Submenu items
                    { label: 'AWS', template: '<img src="../../../assets/images/aws.jpg" alt="AWS" style="height: 1rem;" />' },
                    { label: 'Azure', template: '<img src="../../../assets/images/azure.png" alt="Azure" />' },
                    { label: 'GCP', template: '<img src="../../../assets/images/google.png" alt="Google" />' }
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-fw pi-file',
                align: 'left',
                items: [ // Submenu items
                    { label: 'Subitem 1', icon: 'pi pi-fw pi-info-circle' },
                    { label: 'Subitem 2', icon: 'pi pi-fw pi-info-circle' }
                ]
            },
            {
                label: 'Feedback',
                icon: 'pi pi-fw pi-comments',
                align: 'right',
                items: [ // Submenu items
                    { label: 'Subitem 1', icon: 'pi pi-fw pi-user' },
                    { label: 'Subitem 2', icon: 'pi pi-fw pi-user' }
                ]
            },
            {
                label: 'Training',
                icon: 'pi pi-fw pi-book',
                align: 'right'
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question-circle',
                align: 'right',
                items: [ // Submenu items
                    { label: 'Support', icon: 'pi pi-fw pi-user' },
                    { label: 'Tutorials', icon: 'pi pi-fw pi-user' },
                    { label: 'Documentation', icon: 'pi pi-fw pi-user' }
                ]
            }
        ];
    }

    isNearRightEdge(event: MouseEvent): boolean {
        const menuItemElement = event.target as HTMLElement;
        const menuItemRect = menuItemElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        return menuItemRect.right > viewportWidth - 200; // Adjust 200px as per your requirement
    }

    move(path: any) {
        this.router.navigate(['/main/', path])
    }

}