import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {APIService} from '../services/api.service';
import {AlertController, ToastController} from '@ionic/angular';
import {CardCategoryService} from '../services/card-category.service';
import {CardJobService} from '../services/card-job.service';
import {CardService} from '../services/card.service';

@Component({
    selector: 'app-card-uploader',
    templateUrl: './card-uploader.page.html',
    styleUrls: ['./card-uploader.page.scss'],
})
export class CardUploaderPage implements OnInit {
    public cardForm: FormGroup;
    public cardCategoryForm: FormGroup;
    public jobForm: FormGroup;
    public cardDesignerForm: FormGroup;
    public cardTypes = [
        'Forward',
        'Backup',
        'Monster',
        'Summon'
    ];

    public rarities = [
        'COMMON',
        'RARE',
        'HERO',
        'LEGEND'
    ];

    public elements = [
        'FIRE',
        'WIND',
        'WATER',
        'EARTH',
        'LIGHTNING',
        'ICE',
        'LIGHT',
        'DARK'
    ];

    public categories = [];

    public jobs = [];

    public designers = [];

    public cards: Array<any> = [];

    public imageSrc = '';
    public image;

    constructor(private formBuilder: FormBuilder, private api: APIService,
                private toastController: ToastController, private cardCategoryService: CardCategoryService,
                private cardJobService: CardJobService, private cardService: CardService,
                private alertController: AlertController) {
    }

    async ngOnInit() {
        this.cardForm = this.formBuilder.group({
            name: [null, Validators.required],
            cost: [null, Validators.required],
            serialNumber: [null, Validators.required],
            elements: [[null], Validators.required],
            cardType: [null, Validators.required],
            jobs: [null, Validators.required],
            cardCategories: [null, Validators.required],
            powerLevel: [null, Validators.required],
            effectText: [null, Validators.required],
            // effects: [null, Validators.required],
            isExBurst: [false, Validators.required],
            rarity: [null, Validators.required],
            isMultiPlay: [false, Validators.required],
            imageSource: [null, Validators.required],
            cardCardDesignerId: [null, Validators.required]
        });

        this.cardCategoryForm = this.formBuilder.group({
            name: [null, Validators.required]
        });

        this.jobForm = this.formBuilder.group({
            name: [null, Validators.required]
        });

        this.cardDesignerForm = this.formBuilder.group({
            name: [null, Validators.required]
        });

        await this.getCategories();
        await this.getJobs();
        await this.getCards();
        await this.getCardDesigners();
        this.api.OnCreateCardCategoryListener.subscribe(this.onCategoryAdded.bind(this));
        this.api.OnCreateCardJobListener.subscribe(this.onJobAdded.bind(this));
        this.api.OnCreateCardListener.subscribe(this.onCardAdded.bind(this));
        this.api.OnCreateCardDesignerListener.subscribe(this.onCardDesignerAdded.bind(this));
    }

    onImageChange(event) {
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            this.image = event.target.files[0];
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.imageSrc = reader.result as string;
                this.cardForm.patchValue({
                    imageSource: this.image
                });
            };
        }
    }

    onCategoryAdded(newCategory) {
        this.categories.push(newCategory.value.data.onCreateCardCategory);
    }

    onJobAdded(newJob) {
        this.jobs.push(newJob.value.data.onCreateCardJob);
    }

    onCardAdded(newCard) {
        this.cards.push(newCard.value.data.onCreateCard);
    }

    onCardDesignerAdded(newDesigner) {
        this.designers.push(newDesigner.value.data.onCreateCardDesigner);
    }

    viewCard(card) {
        // TODO
    }

    async getCategories() {
        this.categories = await this.cardCategoryService.getAllCategories();
    }

    async getJobs() {
        this.jobs = await this.cardJobService.getAllJobs();
    }

    async getCards() {
        this.cards = await this.cardService.getAllCards();
    }

    async getCardDesigners() {
        this.designers = await this.cardService.getAllCardDesigners();
    }

    async addCard() {
        try {
            await this.cardService.createCard(this.cardForm.value, this.image);
            await (await this.toastController.create({message: 'Card Created Successfully'})).present();
            this.cardForm.reset();
        } catch (err) {
            console.log(err);
            await (await this.toastController.create({message: 'Card Created Failed'})).present();
        }
    }

    async addCardDesigner() {
        try {
            await this.cardService.createCardDesigner(this.cardDesignerForm.value);
            await (await this.toastController.create({message: 'Card Designer Created Successfully'})).present();
            this.cardDesignerForm.reset();
        } catch (err) {
            console.log(err);
            await (await this.toastController.create({message: 'Card Designer Created Failed'})).present();
        }
    }

    async addCategory() {
        try {
            await this.api.CreateCardCategory(this.cardCategoryForm.value);
            await (await this.toastController.create({message: 'Category Created Successfully'})).present();
            this.cardCategoryForm.reset();
        } catch (err) {
            console.log(err);
            await (await this.toastController.create({message: 'Category Created Failed'})).present();
        }
    }

    async addJob() {
        try {
            await this.api.CreateCardJob(this.jobForm.value);
            await (await this.toastController.create({message: 'Job Created Successfully'})).present();
            this.jobForm.reset();
        } catch (err) {
            console.log(err);
            await (await this.toastController.create({message: 'Job Created Failed Failed'})).present();
        }
    }

    async deleteCard(card) {
        const confirm = await this.alertController.create({
            header: 'Confirm!',
            message: `Are you sure you want to delete ${card.name}`,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });
        await confirm.present();
        const data = await confirm.onDidDismiss();
        if (!data.role) {
            await this.api.DeleteCard({id: card.id});
            await (await this.toastController.create({message: 'Job Created Successfully'})).present();
        }
    }
}
