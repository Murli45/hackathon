
    import { Component, OnInit, ViewEncapsulation } from '@angular/core';
    import { FormBuilder,FormGroup } from '@angular/forms';
    import { FormControl, Validators } from '@angular/forms';
    import { PrimeNGConfig, MenuItem } from 'primeng/api';
    import {Message,MessageService} from 'primeng/api';
    import { Accordion } from 'primeng/accordion';
    import {TreeNode} from 'primeng/api';

    @Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss'],
        providers: [MessageService, Accordion],
        styles: [],
        encapsulation: ViewEncapsulation.None,
    })
    export class FooterComponent implements OnInit {    
        
        constructor() {}

        ngOnInit() {}
        
    }