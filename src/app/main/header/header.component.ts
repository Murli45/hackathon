
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Accordion } from 'primeng/accordion';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [MessageService, Accordion],
    styles: [],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('dropdownAnimation', [
            state('void', style({ opacity: 0, transform: 'translateY(-10px)' })),
            state('*', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', animate('150ms ease-in')),
            transition('* => void', animate('150ms ease-out'))
        ])
    ]
})
export class HeaderComponent implements OnInit {
    showDropdown: boolean = false;
    display: boolean = false;

    constructor(private router: Router, private loginService: LoginService) { }

    ngOnInit(): void {
    }

    toggleDropdown(event: Event) {
        event.stopPropagation();
        this.showDropdown = true;
    }

    closeDropdown() {
        this.showDropdown = false;
    }

    logout() {
        this.loginService.logout();
        this.router.navigate(['/login'])
    }

    showPrescription() {
        this.display = true;
    }


}