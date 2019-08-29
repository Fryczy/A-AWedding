import {Component, OnInit, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {GiftService} from '../gift.service';
import { DonationDialogComponent } from '../donation-dialog/donation-dialog.component';

@Component({
    selector: 'app-gift',
    templateUrl: './gift.component.html',
    styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
    @Input() name: string;
    @Input() numOfDonators: number;
    @Input() maxNumOfDonators: number;

    constructor(private giftService : GiftService, public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    donate() {
        let email = '';
        const dialogRef = this.dialog.open(DonationDialogComponent, {
            width: '250px',
            data : {email : email}
        });
        dialogRef.afterClosed().subscribe(result => {
            email = result;
        });
        console.log(email);
        //this.giftService.AddDonatorToGift(name, email);
    }

}
