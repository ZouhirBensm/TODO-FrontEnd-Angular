export class Todo {
    id: number;
    title: string;
    date_cr: Date;
    date_dn: Date;
    date_dn_clicked: Date;
    status: number;
}

// Status: 1: Null, 2: Requires Attention 3: Priority 4: Soon Finished 5: Done